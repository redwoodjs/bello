import type {
  QueryResolvers,
  MutationResolvers,
  IdeaResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import Create from 'src/lib/Ideation/Idea/Create/Create'
import Latest from 'src/lib/Explore/Ideas/Latest/Latest'
import Champion from 'src/lib/Ideation/Idea/Champion/Champion'
import Cast from 'src/lib/Community/Vote/Cast/Cast'

export const CastVote = Cast

export const ChampionIdea = Champion

export const latest = Latest

export const ideas: QueryResolvers['ideas'] = async () => {
  const userId = context?.currentUser?.id

  let list = []

  const ideas = await db.idea.findMany({
    include: { champions: true, topics: true, votes: true },
  })

  for (const index in ideas) {
    let { votes, ...idea } = ideas[index]

    const userVote = userId
      ? await db.ideaVote
          .findUnique({
            where: { ideaId_userId: { ideaId: idea.id, userId } },
          })
          .then((v) => v?.vote)
      : undefined

    const count = {
      total: votes.length,
      upvotes: votes.filter(({ vote }) => vote === 'upvote').length,
      downvotes: votes.filter(({ vote }) => vote === 'downvote').length,
    }

    list.push({
      ...idea,
      userVote,
      count,
    })
  }

  return list
}

export const idea: QueryResolvers['idea'] = ({ id }) => {
  return db.idea
    .findUnique({
      where: { id },
      include: { author: true, captain: true },
    })
    .then((idea) => ({
      ...idea,
      canEdit:
        (context?.currentUser?.id &&
          [idea.authorId, idea.captainId].includes(context.currentUser.id)) ||
        context?.currentUser?.roles?.includes('coreteam') ||
        false,
    }))
}

export const createIdea = Create

export const updateIdea: MutationResolvers['updateIdea'] = ({ id, input }) => {
  return db.idea.update({
    data: input,
    where: { id },
  })
}

export const deleteIdea: MutationResolvers['deleteIdea'] = ({ id }) => {
  return db.idea.delete({
    where: { id },
  })
}

export const Idea: IdeaResolvers = {
  author: (_obj, { root }) =>
    db.idea.findUnique({ where: { id: root.id } }).author(),
  captain: (_obj, { root }) =>
    db.idea.findUnique({ where: { id: root.id } }).captain(),
  champions: (_obj, { root }) =>
    db.idea.findUnique({ where: { id: root.id } }).champions(),
  topics: (_obj, { root }) =>
    db.idea.findUnique({ where: { id: root.id } }).topics(),
  hires: (_obj, { root }) =>
    db.idea.findUnique({ where: { id: root.id } }).hires(),
  technologies: (_obj, { root }) =>
    db.idea.findUnique({ where: { id: root.id } }).technologies(),
  followers: (_obj, { root }) =>
    db.idea.findUnique({ where: { id: root.id } }).followers(),
  votes: (_obj, { root }) =>
    db.ideaVote.findMany({ where: { ideaId: root.id } }),
  count: async (_obj, { root }) => {
    const votes = await db.ideaVote.findMany({ where: { ideaId: root.id } })

    const total = await db.idea
      .findUnique({ where: { id: root.id } })
      .champions()
      .then((c) => c.length)

    return {
      total,
      upvotes: votes.filter(({ vote }) => vote === 'upvote').length,
      downvotes: votes.filter(({ vote }) => vote === 'downvote').length,
    }
  },
  userVote: (_obj, { root }) => {
    const userId = context.currentUser?.id

    if (!userId) {
      return undefined
    }

    return db.ideaVote
      .findUnique({
        where: { ideaId_userId: { ideaId: root.id, userId } },
      })
      .then((v) => v?.vote)
  },
}
