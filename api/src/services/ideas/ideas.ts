import type {
  QueryResolvers,
  MutationResolvers,
  IdeaResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const ideas: QueryResolvers['ideas'] = () => {
  return db.idea.findMany()
}

export const idea: QueryResolvers['idea'] = ({ id }) => {
  return db.idea.findUnique({
    where: { id },
  })
}

export const createIdea: MutationResolvers['createIdea'] = ({ input }) => {
  return db.idea.create({
    data: input,
  })
}

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
}
