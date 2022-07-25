import {
  skillSets,
  skillSet,
  createSkillSet,
  updateSkillSet,
  deleteSkillSet,
} from './skillSets'
import type { StandardScenario } from './skillSets.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('skillSets', () => {
  scenario('returns all skillSets', async (scenario: StandardScenario) => {
    const result = await skillSets()

    expect(result.length).toEqual(Object.keys(scenario.skillSet).length)
  })

  scenario('returns a single skillSet', async (scenario: StandardScenario) => {
    const result = await skillSet({ id: scenario.skillSet.one.id })

    expect(result).toEqual(scenario.skillSet.one)
  })

  scenario('creates a skillSet', async () => {
    const result = await createSkillSet({
      input: { label: 'String9823475' },
    })

    expect(result.label).toEqual('String9823475')
  })

  scenario('updates a skillSet', async (scenario: StandardScenario) => {
    const original = await skillSet({ id: scenario.skillSet.one.id })
    const result = await updateSkillSet({
      id: original.id,
      input: { label: 'String22853642' },
    })

    expect(result.label).toEqual('String22853642')
  })

  scenario('deletes a skillSet', async (scenario: StandardScenario) => {
    const original = await deleteSkillSet({ id: scenario.skillSet.one.id })
    const result = await skillSet({ id: original.id })

    expect(result).toEqual(null)
  })
})
