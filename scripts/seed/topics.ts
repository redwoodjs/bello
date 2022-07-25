import { db } from '$api/src/lib/db'
import { topics } from 'api/src/seeds/topics'

export default async function () {
  for (let i in topics) {
    const topic = await db.topic.findUnique({ where: { label: topics[i] } })

    if (!topic) {
      await db.topic.create({
        data: { label: topics[i], description: topics[i] },
      })
    }
  }

  console.log('Topics seeded.')
}
