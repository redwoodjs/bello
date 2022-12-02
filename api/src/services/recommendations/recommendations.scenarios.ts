import type { Prisma, Recommendation } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecommendationCreateArgs>({
  recommendation: {
    one: {
      data: {
        text: 'String',
        businessEntity: {
          create: {
            type: 'partner',
            label: 'String6903974',
            description: 'String1366142',
            admin: {
              create: {
                email: 'String4533481',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String890961',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        text: 'String',
        businessEntity: {
          create: {
            type: 'partner',
            label: 'String9845831',
            description: 'String5708847',
            admin: {
              create: {
                email: 'String2804497',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String2976356',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Recommendation, 'recommendation'>
