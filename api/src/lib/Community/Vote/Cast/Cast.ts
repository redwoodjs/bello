import { db } from 'src/lib/db'
import { User } from '@prisma/client'
import { IdeaVote, MutationCastVoteArgs } from 'types/graphql'

export default async function Cast({
  ideaId,
  input: { vote },
}: MutationCastVoteArgs): Promise<Pick<IdeaVote, 'id'>> {
  const user = context.currentUser as User

  return db.ideaVote.upsert({
    where: { ideaId_userId: { ideaId, userId: user.id } },
    create: { ideaId, userId: user.id, vote },
    update: { vote },
  })
}
