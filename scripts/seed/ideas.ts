import { db } from '$api/src/lib/db'
import { Topic, Vote } from '@prisma/client'
import { ideas as IdeaSeeds } from 'api/src/seeds/ideas'
import dayjs from 'dayjs'
import _ from 'lodash'

const VOTE_TYPES: Vote[] = ['upvote', 'downvote']

export default async function ideas() {
  const topics = await db.topic.findMany({ select: { id: true } })

  const users = await db.user.findMany({
    select: { id: true },
  })

  const user = await db.user.findFirst()

  for (const data of IdeaSeeds) {
    const randomTopic = random<Partial<Topic>>(topics)

    const ideaData = {
      ...data,
      topics: { connect: { id: randomTopic.id } },
      author: { connect: { id: user.id } },
    }

    await db.idea
      .findUnique({ where: { title: ideaData.title } })
      .then(async (existingIdea) => {
        if (!existingIdea) {
          const idea = await db.idea.create({ data: ideaData })

          await createVotes(idea, users)
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

const random = <T = unknown>(arr: T[]): T => {
  return arr[~~(Math.random() * arr.length)]
}
