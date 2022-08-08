import { db } from 'src/lib/db'
import { IdeaVote, MutationCastVoteArgs } from 'types/graphql'

export default async function Cast({
  ideaId,
  input,
}: MutationCastVoteArgs): Promise<Pick<IdeaVote, 'id'>> {
  const userId = context.currentUser.id

  return db.ideaVote.upsert({
    where: { ideaId_userId: { ideaId, userId } },
    create: { ideaId, userId, vote: input.vote },
    update: { vote: input.vote },
  })
}
