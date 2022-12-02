import { db } from 'src/lib/db'
import { MutationResolvers } from 'types/graphql'

/**
 * Should only be used for the User's onboarding.
 */

export default <MutationResolvers['onboardUser']>(
  async function onboardUser({ input }) {
    return db.user.update({
      data: {
        ...input,
        skillSets: { set: input.skillSets.map((id) => ({ id })) },
        topics: { set: input.topics.map((id) => ({ id })) },
        hasOnboarded: true,
      },
      where: { id: context.currentUser.id },
      include: {
        topics: { select: { id: true } },
        skillSets: { select: { id: true } },
      },
    })
  }
)
