import type { BusinessEntity } from '@prisma/client'

import {
  businessEntities,
  businessEntity,
  createBusinessEntity,
  updateBusinessEntity,
  deleteBusinessEntity,
} from './businessEntities'
import type { StandardScenario } from './businessEntities.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('businessEntities', () => {
  scenario(
    'returns all businessEntities',
    async (scenario: StandardScenario) => {
      const result = await businessEntities()

      expect(result.length).toEqual(Object.keys(scenario.businessEntity).length)
    }
  )

  scenario(
    'returns a single businessEntity',
    async (scenario: StandardScenario) => {
      const result = await businessEntity({
        id: scenario.businessEntity.one.id,
      })

      expect(result).toEqual(scenario.businessEntity.one)
    }
  )

  scenario('creates a businessEntity', async (scenario: StandardScenario) => {
    const result = await createBusinessEntity({
      input: {
        type: 'partner',
        label: 'String5846675',
        description: 'String5782417',
        adminId: scenario.businessEntity.two.adminId,
      },
    })

    expect(result.type).toEqual('partner')
    expect(result.label).toEqual('String5846675')
    expect(result.description).toEqual('String5782417')
    expect(result.adminId).toEqual(scenario.businessEntity.two.adminId)
  })

  scenario('updates a businessEntity', async (scenario: StandardScenario) => {
    const original = (await businessEntity({
      id: scenario.businessEntity.one.id,
    })) as BusinessEntity
    const result = await updateBusinessEntity({
      id: original.id,
      input: { type: 'startup' },
    })

    expect(result.type).toEqual('startup')
  })

  scenario('deletes a businessEntity', async (scenario: StandardScenario) => {
    const original = (await deleteBusinessEntity({
      id: scenario.businessEntity.one.id,
    })) as BusinessEntity
    const result = await businessEntity({ id: original.id })

    expect(result).toEqual(null)
  })
})
