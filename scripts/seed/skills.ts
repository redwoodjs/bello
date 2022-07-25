import { db } from 'api/src/lib/db'
import { skills } from 'api/src/seeds/skills'

export default async function () {
  for (let i in skills) {
    const skill = await db.skill.findUnique({ where: { label: skills[i] } })

    if (!skill) {
      await db.skill.create({ data: { label: skills[i] } })
    }
  }

  console.log('Skills seeded.')
}
