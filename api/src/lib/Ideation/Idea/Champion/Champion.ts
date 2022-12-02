import { db } from 'src/lib/db'

export default async function Champion({ id }) {
  return db.idea.update({
    where: { id },
    data: { champions: { connect: { id: context.currentUser.id } } },
  })
}
