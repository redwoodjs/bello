import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SkillSetCreateArgs>({
  skillSet: {
    one: { data: { label: 'String5673053' } },
    two: { data: { label: 'String5849258' } },
  },
})

export type StandardScenario = typeof standard
