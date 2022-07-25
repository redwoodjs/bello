import { db } from 'api/src/lib/db'
import { skillsets } from 'api/src/seeds/skillsets'

export default async function () {
  for (let i in skillsets) {
    const skillset = await db.skillSet.findUnique({
      where: { label: skillsets[i] },
    })

    if (!skillset) {
      await db.skillSet.create({ data: { label: skillsets[i] } })
    }
  }

  console.log('Skillsets seeded.')
}
