import { db } from "api/src/lib/db"

const skills = [
  "JavaScript", "TypeScript", "Jest", "GraphQL", "Prisma"
]

export default async function () {

  for (let i in skills) {
    const skill = await db.skill.findUnique({ where: { label: skills[i] } })

    if (!skill) {
      await db.skill.create({ data: { label: skills[i] } })
    }
  }

  console.log("Skills seeded.");


}
