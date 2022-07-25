import type {
  QueryResolvers,
  MutationResolvers,
  UserResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import Onboard from 'src/lib/Community/User/Onboard/Onboard'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const onboardUser: MutationResolvers['onboardUser'] = Onboard

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserResolvers = {
  strength: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).strength(),
  skills: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).skills(),
  skillSets: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).skillSets(),
  topics: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).topics(),
  authorOf: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).authorOf(),
  championFor: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).championFor(),
  captainFor: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).captainFor(),
  follows: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).follows(),
  member: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).member(),
}
