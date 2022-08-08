import { Prisma, Role } from '@prisma/client'
import { db } from 'api/src/lib/db'
import { faker } from '@faker-js/faker'
import _ from 'lodash'

const ROLES: Role[] = [
  'admin',
  'coreteam',
  'partner',
  'startup',
  'contributor',
  'default',
]

const STRENGTHS = ['architect', 'fullstack', 'frontend', 'backend', 'mobile']

function user(): Prisma.UserCreateInput {
  return {
    email: faker.internet.email(),
    username: faker.internet.userName(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    strength: { connect: { label: _.sample(STRENGTHS) } },
    salt: faker.internet.password(),
    hashedPassword: 'hashedPassword',
    role: _.sample(ROLES),
  }
}

const users: Prisma.UserCreateInput[] = [...Array(100)].map((_i) => user())

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
