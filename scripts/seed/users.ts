import { Prisma } from '@prisma/client'
import { db } from "api/src/lib/db"

const users: Prisma.UserCreateInput[] = [
  { email: 'bob@jones.com', handle: 'Bob', firstname: 'Robert', lastname: 'Jones', strength: { connect: { label: "architect" } } }
]

export default async function () {

  for (let i in users) {
    const data = users[i]

    const user = await db.user.findUnique({ where: { handle: data.handle } })

    if (!user) {
      const newUser = await db.user.create({ data })
      await db.member.create({ data: { title: `Hi! I'm ${data.firstname}`, user: { connect: { id: newUser.id } } } })

    }
  }

  console.log("User-s seeded.");


}
