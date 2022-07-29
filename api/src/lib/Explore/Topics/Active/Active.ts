import { db } from 'src/lib/db'
import { Prisma } from 'prisma/client'

export default async function (a: Prisma.UserFindManyArgs) {
  const topics = new Map()

  const ideas = await db.idea.findMany({
    orderBy: { updatedAt: 'desc' },
    take: 3,
    select: {
      title: true,
      topics: { select: { id: true, label: true, description: true } },
    },
  })

  if (ideas) {
    for (const idea of ideas) {
      idea.topics.map((topic) => topics.set(topic.id, topic))
    }

    const topic_selection = [...topics.values()].slice(0, 3)

    for (const topic_key in topic_selection) {
      const topic = topic_selection[topic_key]

      const nbIdeas = await db.idea.count({
        where: { topics: { some: { id: { equals: topic.id } } } },
      })

      topic_selection[topic_key] = { ...topic_selection[topic_key], nbIdeas }
    }

    return topic_selection
  }

  return []
}
