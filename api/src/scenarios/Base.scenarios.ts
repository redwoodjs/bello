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
  },
  /** user: {
    one(scenario) {
      return {
        data: {
          firstname: 'Bob',
          lastname: 'Jones',
          username: 'Nick',
          email: 'bob@jones.com',
        },
      }
    },
  },*/
})
