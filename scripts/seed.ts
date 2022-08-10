import users from './seed/users'
import skills from './seed/skills'
import skillsets from './seed/skillsets'
import topics from './seed/topics'
import ideas from './seed/ideas'
import { db } from '$api/src/lib/db'

export default async () => {
  try {
    console.warn(
      `
This command is pruning your entire DB before seeding anything.
Sorry about that - it's necessary to clean up online environment. We'll sort it out soon!


`
    )

    await db.topic.deleteMany()

    await db.skillSet.deleteMany()

    await db.skill.deleteMany()

    await db.member.deleteMany()

    await db.ideaVote.deleteMany()

    await db.idea.deleteMany()

    await db.user.deleteMany()

    await topics()

    await skillsets()

    await skills()

    await users()

    await ideas()
  } catch (error) {
    console.error(error)
  }
}
