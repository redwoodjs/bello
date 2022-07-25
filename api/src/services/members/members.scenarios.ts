import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MemberCreateArgs>({
  member: {
    one: {
      data: {
        user: {
          create: {
            email: 'String3189514',
            username: 'String401479',
            strength: { create: { label: 'String2828088' } },
          },
        },
      },
    },
    two: {
      data: {
        user: {
          create: {
            email: 'String2372292',
            username: 'String1665530',
            strength: { create: { label: 'String2361053' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
