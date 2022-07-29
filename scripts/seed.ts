import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import users from './seed/users'
import skills from './seed/skills'
import skillsets from './seed/skillsets'
import topics from './seed/topics'
import ideas from './seed/ideas'

export default async () => {
  try {
    await topics()
    await skillsets()
    await skills()
    await users()
    await ideas()
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
