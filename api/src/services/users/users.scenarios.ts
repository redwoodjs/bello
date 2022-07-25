import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String1326028',
        username: 'String5733719',
        strength: { create: { label: 'String3235199' } },
      },
    },
    two: {
      data: {
        email: 'String3432938',
        username: 'String6301227',
        strength: { create: { label: 'String4457521' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
