import type {
  QueryResolvers,
  MutationResolvers,
  TopicResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const topics: QueryResolvers['topics'] = () => {
  return db.topic.findMany()
}

export const topic: QueryResolvers['topic'] = ({ id }) => {
  return db.topic.findUnique({
    where: { id },
  })
}

export const createTopic: MutationResolvers['createTopic'] = ({ input }) => {
  return db.topic.create({
    data: input,
  })
}

export const updateTopic: MutationResolvers['updateTopic'] = ({
  id,
  input,
}) => {
  return db.topic.update({
    data: input,
    where: { id },
  })
}

export const deleteTopic: MutationResolvers['deleteTopic'] = ({ id }) => {
  return db.topic.delete({
    where: { id },
  })
}

export const Topic: TopicResolvers = {
  users: (_obj, { root }) =>
    db.topic.findUnique({ where: { id: root.id } }).users(),
  Idea: (_obj, { root }) =>
    db.topic.findUnique({ where: { id: root.id } }).Idea(),
}
