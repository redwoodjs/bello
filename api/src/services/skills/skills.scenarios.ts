import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SkillCreateArgs>({
  skill: {
    one: { data: { label: 'String5899258' } },
    two: { data: { label: 'String1814422' } },
  },
})

export type StandardScenario = typeof standard
