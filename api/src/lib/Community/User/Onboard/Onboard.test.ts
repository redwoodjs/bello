import { db } from 'src/lib/db'
import { onboardUser } from 'src/services/users/users'

describe('Community - User - Onboard', function () {
  scenario('Records a new user.', async function (scenario) {
    const user = await db.user.create({
      data: {
        email: 'bob@jones.com',
        username: 'nick',
      },
    })

    mockCurrentUser(user)

    const input = {
      firstname: 'Bob',
      lastname: 'Jones',
      strengthId: scenario.skillSet.one.id,
      topics: [scenario.topic.one.id, scenario.topic.two.id],
      skillSets: [scenario.skillSet.one.id, scenario.skillSet.two.id],
    }

    const updatedUser = await onboardUser({ input })

    expect(updatedUser).toMatchObject({
      ...input,
      topics: input.topics.map((id) => ({ id })),
      skillSets: input.skillSets.map((id) => ({ id })),
    })
  })
})
