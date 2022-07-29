import { db } from '$api/src/lib/db'
import { ideas as IdeaSeeds } from 'api/src/seeds/ideas'

export default async function ideas() {
  const topics = await db.topic.findMany({ select: { id: true } })

  const user = await db.user.findFirst()

  for (const idea of IdeaSeeds) {
    const ideaData = {
      ...idea,
      topics: { connect: { id: topics[2].id } },
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

  console.log('Ideas generated.')
}
