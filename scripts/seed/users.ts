import { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

const users: Prisma.UserCreateInput[] = [
  {
    email: 'bob@jones.com',
    username: 'Bob',
    firstname: 'Robert',
    lastname: 'Jones',
    strength: { connect: { label: 'architect' } },
    salt: 'minjx',
    hashedPassword: 'hashedPassword',
  },
]

export default async function () {
  for (let i in users) {
    const data = users[i]

    const user = await db.user.findUnique({
      where: { username: data.username },
    })

    if (!user) {
      const newUser = await db.user.create({ data })
      await db.member.create({
        data: {
          title: `Hi! I'm ${data.firstname}`,
          user: { connect: { id: newUser.id } },
        },
      })
    }
  }

  console.log('User-s seeded.')
}
