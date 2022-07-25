import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IdeaCreateArgs>({
  idea: {
    one: {
      data: {
        title: 'String2862135',
        problem: 'String76600',
        author: {
          create: {
            email: 'String521406',
            username: 'String5558866',
            strength: { create: { label: 'String4326812' } },
          },
        },
      },
    },
    two: {
      data: {
        title: 'String3589668',
        problem: 'String3734616',
        author: {
          create: {
            email: 'String783508',
            username: 'String3569394',
            strength: { create: { label: 'String4340358' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
