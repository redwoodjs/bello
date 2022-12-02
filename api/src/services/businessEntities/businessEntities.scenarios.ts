import type { Prisma, BusinessEntity } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BusinessEntityCreateArgs>({
  businessEntity: {
    one: {
      data: {
        type: 'partner',
        label: 'String3339895',
        description: 'String9068847',
        admin: {
          create: {
            email: 'String8732981',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        type: 'partner',
        label: 'String1189055',
        description: 'String3947328',
        admin: {
          create: {
            email: 'String2363546',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<BusinessEntity, 'businessEntity'>
