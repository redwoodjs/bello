import { BusinessEntity } from '@prisma/client'
import { db } from 'api/src/lib/db'
import { faker } from '@faker-js/faker'
import _ from 'lodash'

type BusinessEntityStub = Omit<BusinessEntity, 'id' | 'adminId'>

function businessEntity(): BusinessEntityStub {
  return {
    type: _.sample(['startup', 'partner']),
    label: faker.company.companyName(),
    description: faker.company.catchPhraseDescriptor(),
    url: faker.internet.url(),
  }
}

const businessEntities: BusinessEntityStub[] = [...Array(8)].map((_i) =>
  businessEntity()
)

export default async function () {
  for (let i in businessEntities) {
    const admin = await nonAdmin()

    const team = await candidates()

    const data = {
      ...businessEntities[i],
      admin: { connect: { id: admin.id } },
      team: { connect: team },
    }

    console.log(`Creating ${data.label}`)

    const entity = await db.businessEntity.create({
      data,
      select: { id: true },
    })

    for (const member of team) {
      await recommend(member, entity)
    }
  }

  console.log('Business entities seeded.')
}

const nonAdmin = () =>
  db.user
    .findMany({
      where: {
        adminOfBusinessEntity: { is: undefined },
        role: { not: 'coreteam' },
      },
      select: { id: true },
    })
    .then((users) => _.sample(users))

const candidates = () =>
  db.user
    .findMany({
      select: { id: true },
      where: {
        adminOfBusinessEntity: { is: undefined },
        role: { not: 'admin' },
      },
    })
    .then((users) => _.sampleSize(users, _.random(1, 15, false)))

const recommend = (user, entity) =>
  db.recommendation.create({
    data: {
      user: { connect: { id: user.id } },
      businessEntity: { connect: { id: entity.id } },
      text: 'Single handedly saved our lives in a blaze of flashy designs and neat frontend tricks to deliver one of our core features. Bravo, a great hire and a great point of contact with the Core Team.',
    },
  })
