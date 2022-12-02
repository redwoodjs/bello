import type { Recommendation } from '@prisma/client'

import {
  recommendations,
  recommendation,
  createRecommendation,
  updateRecommendation,
  deleteRecommendation,
} from './recommendations'
import type { StandardScenario } from './recommendations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('recommendations', () => {
  scenario(
    'returns all recommendations',
    async (scenario: StandardScenario) => {
      const result = await recommendations()

      expect(result.length).toEqual(Object.keys(scenario.recommendation).length)
    }
  )

  scenario(
    'returns a single recommendation',
    async (scenario: StandardScenario) => {
      const result = await recommendation({
        id: scenario.recommendation.one.id,
      })

      expect(result).toEqual(scenario.recommendation.one)
    }
  )

  scenario('creates a recommendation', async (scenario: StandardScenario) => {
    const result = await createRecommendation({
      input: {
        businessEntityId: scenario.recommendation.two.businessEntityId,
        userId: scenario.recommendation.two.userId,
        text: 'String',
      },
    })

    expect(result.businessEntityId).toEqual(
      scenario.recommendation.two.businessEntityId
    )
    expect(result.userId).toEqual(scenario.recommendation.two.userId)
    expect(result.text).toEqual('String')
  })

  scenario('updates a recommendation', async (scenario: StandardScenario) => {
    const original = (await recommendation({
      id: scenario.recommendation.one.id,
    })) as Recommendation
    const result = await updateRecommendation({
      id: original.id,
      input: { text: 'String2' },
    })

    expect(result.text).toEqual('String2')
  })

  scenario('deletes a recommendation', async (scenario: StandardScenario) => {
    const original = (await deleteRecommendation({
      id: scenario.recommendation.one.id,
    })) as Recommendation
    const result = await recommendation({ id: original.id })

    expect(result).toEqual(null)
  })
})
