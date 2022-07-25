import type {
  QueryResolvers,
  MutationResolvers,
  SkillSetResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const skillSets: QueryResolvers['skillSets'] = () => {
  return db.skillSet.findMany()
}

export const skillSet: QueryResolvers['skillSet'] = ({ id }) => {
  return db.skillSet.findUnique({
    where: { id },
  })
}

export const createSkillSet: MutationResolvers['createSkillSet'] = ({
  input,
}) => {
  return db.skillSet.create({
    data: input,
  })
}

export const updateSkillSet: MutationResolvers['updateSkillSet'] = ({
  id,
  input,
}) => {
  return db.skillSet.update({
    data: input,
    where: { id },
  })
}

export const deleteSkillSet: MutationResolvers['deleteSkillSet'] = ({ id }) => {
  return db.skillSet.delete({
    where: { id },
  })
}

export const SkillSet: SkillSetResolvers = {
  users: (_obj, { root }) =>
    db.skillSet.findUnique({ where: { id: root.id } }).users(),
  user: (_obj, { root }) =>
    db.skillSet.findUnique({ where: { id: root.id } }).user(),
  idea: (_obj, { root }) =>
    db.skillSet.findUnique({ where: { id: root.id } }).idea(),
}
