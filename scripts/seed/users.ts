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
          description: `Stapledon's conception of history follows a repetitive cycle with many varied civilisations rising from and descending back into savagery over millions of years, as the later civilisations rise to far greater heights than the first. The book anticipates the science of genetic engineering, and is an early example of the fictional supermind; a consciousness composed of many telepathically linked individuals.`,
          user: { connect: { id: newUser.id } },
        },
      })

      const topics = await db.topic.findMany({ take: 3 })

      await db.user.update({
        data: { topics: { connect: topics.map(({ id }) => ({ id })) } },
        where: { id: newUser.id },
      })
    }
  }

  console.log('User-s seeded.')
}
