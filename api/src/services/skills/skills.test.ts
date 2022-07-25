import { skills, skill, createSkill, updateSkill, deleteSkill } from './skills'
import type { StandardScenario } from './skills.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('skills', () => {
  scenario('returns all skills', async (scenario: StandardScenario) => {
    const result = await skills()

    expect(result.length).toEqual(Object.keys(scenario.skill).length)
  })

  scenario('returns a single skill', async (scenario: StandardScenario) => {
    const result = await skill({ id: scenario.skill.one.id })

    expect(result).toEqual(scenario.skill.one)
  })

  scenario('creates a skill', async () => {
    const result = await createSkill({
      input: { label: 'String2423364' },
    })

    expect(result.label).toEqual('String2423364')
  })

  scenario('updates a skill', async (scenario: StandardScenario) => {
    const original = await skill({ id: scenario.skill.one.id })
    const result = await updateSkill({
      id: original.id,
      input: { label: 'String56610352' },
    })

    expect(result.label).toEqual('String56610352')
  })

  scenario('deletes a skill', async (scenario: StandardScenario) => {
    const original = await deleteSkill({ id: scenario.skill.one.id })
    const result = await skill({ id: original.id })

    expect(result).toEqual(null)
  })
})
