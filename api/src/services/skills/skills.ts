import type {
  QueryResolvers,
  MutationResolvers,
  SkillResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const skills: QueryResolvers['skills'] = () => {
  return db.skill.findMany()
}

export const skill: QueryResolvers['skill'] = ({ id }) => {
  return db.skill.findUnique({
    where: { id },
  })
}

export const createSkill: MutationResolvers['createSkill'] = ({ input }) => {
  return db.skill.create({
    data: input,
  })
}

export const updateSkill: MutationResolvers['updateSkill'] = ({
  id,
  input,
}) => {
  return db.skill.update({
    data: input,
    where: { id },
  })
}

export const deleteSkill: MutationResolvers['deleteSkill'] = ({ id }) => {
  return db.skill.delete({
    where: { id },
  })
}

export const Skill: SkillResolvers = {
  users: (_obj, { root }) =>
    db.skill.findUnique({ where: { id: root.id } }).users(),
  Idea: (_obj, { root }) =>
    db.skill.findUnique({ where: { id: root.id } }).Idea(),
}
