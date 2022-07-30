import { db } from '$api/src/lib/db'
import { ideas as IdeaSeeds } from 'api/src/seeds/ideas'
import dayjs from 'dayjs'

export default async function ideas() {
  const topics = await db.topic.findMany({ select: { id: true } })

  const user = await db.user.findFirst()

  for (const idea of IdeaSeeds) {
    const randomTopic = topics[~~(Math.random() * topics.length)]

    const ideaData = {
      ...idea,
      topics: { connect: { id: randomTopic.id } },
      author: { connect: { id: user.id } },
    }

    await db.idea
      .findUnique({ where: { title: ideaData.title } })
      .then(async (existingIdea) => {
        if (!existingIdea) {
          await db.idea.create({ data: ideaData })
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
