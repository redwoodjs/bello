import { ideas, idea, createIdea, updateIdea, deleteIdea } from './ideas'
import type { StandardScenario } from './ideas.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('ideas', () => {
  scenario('returns all ideas', async (scenario: StandardScenario) => {
    const result = await ideas()

    expect(result.length).toEqual(Object.keys(scenario.idea).length)
  })

  scenario('returns a single idea', async (scenario: StandardScenario) => {
    const result = await idea({ id: scenario.idea.one.id })

    expect(result).toEqual(scenario.idea.one)
  })

  scenario('creates a idea', async (scenario: StandardScenario) => {
    const result = await createIdea({
      input: {
        authorId: scenario.idea.two.authorId,
        title: 'String9027974',
        problem: 'String1353149',
      },
    })

    expect(result.authorId).toEqual(scenario.idea.two.authorId)
    expect(result.title).toEqual('String9027974')
    expect(result.problem).toEqual('String1353149')
  })

  scenario('updates a idea', async (scenario: StandardScenario) => {
    const original = await idea({ id: scenario.idea.one.id })
    const result = await updateIdea({
      id: original.id,
      input: { title: 'String46968702' },
    })

    expect(result.title).toEqual('String46968702')
  })

  scenario('deletes a idea', async (scenario: StandardScenario) => {
    const original = await deleteIdea({ id: scenario.idea.one.id })
    const result = await idea({ id: original.id })

    expect(result).toEqual(null)
  })
})
