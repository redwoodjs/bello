import { skills } from 'src/seeds/skills'
import { skillsets } from 'src/seeds/skillsets'
import { topics } from 'src/seeds/topics'

export const standard = defineScenario({
  skillSet: {
    one: { data: { label: skillsets[0] } },
    two: { data: { label: skillsets[1] } },
    three: { data: { label: skillsets[2] } },
  },
  skill: {
    one: { data: { label: skills[0] } },
    two: { data: { label: skills[1] } },
    three: { data: { label: skills[2] } },
  },
  topic: {
    one: { data: { label: topics[0], description: topics[0] } },
    two: { data: { label: topics[1], description: topics[1] } },
    three: { data: { label: topics[2], description: topics[2] } },
    four: { data: { label: topics[3], description: topics[3] } },
    five: { data: { label: topics[4], description: topics[4] } },
    six: { data: { label: topics[5], description: topics[5] } },
  },
  user: {
    one(scenario) {
      return {
        data: {
          firstname: 'Bob',
          lastname: 'Jones',
          username: 'Nick',
          email: 'bob@jones.com',
          hashedPassword: 'someHash',
          salt: 'someSalt',
        },
      }
    },
  },
  member: {
    one(scenario) {
      return {
        data: {
          title: 'Hey! Bob here.',
          description: 'Nothing here',
          user: { connect: { id: scenario.user.one.id } },
        },
      }
    },
  },
  idea: {
    one(scenario) {
      return {
        data: {
          title: 'Some problem',
          problem: 'Some really big problem',
          topics: {
            connect: Object.values({ ...scenario.topic })
              .slice(2, 5)
              .map(({ id }) => ({ id })),
          },
          author: { connect: { id: scenario.user.one.id } },
        },
      }
    },
    two(scenario) {
      return {
        data: {
          title: 'Some other problem',
          problem: 'Some other really, really big problem',
          topics: {
            connect: Object.values({ ...scenario.topic })
              .slice(3, 6)
              .map(({ id }) => ({ id })),
          },
          author: { connect: { id: scenario.user.one.id } },
        },
      }
    },
  },
})
