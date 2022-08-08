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
    console.error(error)
  }
}
