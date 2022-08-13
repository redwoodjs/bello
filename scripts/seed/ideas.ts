import { db } from '$api/src/lib/db'
import { Vote, IdeaStatus } from '@prisma/client'
import { ideas as IdeaSeeds } from 'api/src/seeds/ideas'
import dayjs from 'dayjs'
import _ from 'lodash'

const IDEA_STATUS: IdeaStatus[] = ['help', 'progress', 'done']

const VOTE_TYPES: Vote[] = ['upvote', 'downvote']

export default async function ideas() {
  const topics = await db.topic.findMany({ select: { id: true } })

  const users = await db.user.findMany({
    select: { id: true },
  })

  const coreteam = await db.user.findMany({
    select: { id: true },
    where: { role: { in: ['coreteam'] } },
  })

  for (const data of IdeaSeeds) {
    const randomTopic = _.sample(topics)

    const ideaData = {
      ...data,
      status: _.sample(IDEA_STATUS),
      topics: { connect: { id: randomTopic.id } },
      author: { connect: { id: _.sample(users).id } },
    }

    await db.idea
      .findUnique({ where: { title: ideaData.title } })
      .then(async (existingIdea) => {
        if (!existingIdea) {
          const idea = await db.idea.create({ data: ideaData })

          await createVotes(idea, users)

          await assignChampions(idea, coreteam)
        }
      })
  }

  await sortLatestOut()

  console.log('Ideas generated.')
}

/**
 * Take all ideas from 4 onward and set the createdAt prop back to 2 weeks earlier.
 */
async function sortLatestOut() {
  const drawbackTo = dayjs().subtract(2, 'week').toDate()

  const cursor = await db.idea.findFirst({ skip: 3, select: { id: true } })

  if (cursor) {
    const ideas = await db.idea.findMany({
      orderBy: { id: 'desc' },
      cursor: { id: cursor.id },
    })

    if (ideas?.length) {
      for (const idea of ideas) {
        await db.idea.update({
          where: { id: idea.id },
          data: { createdAt: drawbackTo },
        })
      }
    }
  }
}

/**
 * Assign some core team members as Champions of an Idea.
 * @param idea
 * @param coreteam
 */
async function assignChampions(idea, coreteam) {
  await db.idea.update({
    where: { id: idea.id },
    data: {
      champions: {
        connect: _.sampleSize(coreteam, 3)
          .slice(0, _.random(0, 3, false))
          .map((ct) => ({ id: ct.id })),
      },
    },
  })
}

/**
 * Generate some fake votes for an Idea.
 * @param idea
 * @param users
 */
async function createVotes(idea, users) {
  const voters = _.sampleSize(users, _.random(12, users.length, false))

  await db.ideaVote.createMany({
    data: voters.map((voter) => ({
      userId: voter.id,
      ideaId: idea.id,
      vote: _.sample(VOTE_TYPES),
    })),
  })
}
