import type {
  QueryResolvers,
  MutationResolvers,
  RecommendationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const recommendations: QueryResolvers['recommendations'] = () => {
  return db.recommendation.findMany()
}

export const recommendation: QueryResolvers['recommendation'] = ({ id }) => {
  return db.recommendation.findUnique({
    where: { id },
  })
}

export const createRecommendation: MutationResolvers['createRecommendation'] =
  ({ input }) => {
    return db.recommendation.create({
      data: input,
    })
  }

export const updateRecommendation: MutationResolvers['updateRecommendation'] =
  ({ id, input }) => {
    return db.recommendation.update({
      data: input,
      where: { id },
    })
  }

export const deleteRecommendation: MutationResolvers['deleteRecommendation'] =
  ({ id }) => {
    return db.recommendation.delete({
      where: { id },
    })
  }

export const Recommendation: RecommendationRelationResolvers = {
  businessEntity: (_obj, { root }) => {
    return db.recommendation
      .findUnique({ where: { id: root?.id } })
      .businessEntity()
  },
  user: (_obj, { root }) => {
    return db.recommendation.findUnique({ where: { id: root?.id } }).user()
  },
}
