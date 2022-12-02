import type {
  QueryResolvers,
  MutationResolvers,
  BusinessEntityRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const businessEntities: QueryResolvers['businessEntities'] = () => {
  return db.businessEntity.findMany()
}

export const businessEntity: QueryResolvers['businessEntity'] = ({ id }) => {
  return db.businessEntity.findUnique({
    where: { id },
  })
}

export const createBusinessEntity: MutationResolvers['createBusinessEntity'] =
  ({ input }) => {
    return db.businessEntity.create({
      data: input,
    })
  }

export const updateBusinessEntity: MutationResolvers['updateBusinessEntity'] =
  ({ id, input }) => {
    return db.businessEntity.update({
      data: input,
      where: { id },
    })
  }

export const deleteBusinessEntity: MutationResolvers['deleteBusinessEntity'] =
  ({ id }) => {
    return db.businessEntity.delete({
      where: { id },
    })
  }

export const BusinessEntity: BusinessEntityRelationResolvers = {
  admin: (_obj, { root }) => {
    return db.businessEntity.findUnique({ where: { id: root?.id } }).admin()
  },
  team: (_obj, { root }) => {
    return db.businessEntity.findUnique({ where: { id: root?.id } }).team()
  },
}
