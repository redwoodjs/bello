import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TopicCreateArgs>({
  topic: {
    one: { data: { label: 'String2510001', description: 'String6796480' } },
    two: { data: { label: 'String2240405', description: 'String5567164' } },
  },
})

export type StandardScenario = typeof standard
