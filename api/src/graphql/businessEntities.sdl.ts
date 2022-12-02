export const schema = gql`
  type BusinessEntity {
    id: Int!
    type: BusinessEntityType!
    label: String!
    description: String!
    url: String
    admin: User!
    adminId: Int!
    team: [User]!
  }

  enum BusinessEntityType {
    partner
    startup
  }

  type Query {
    businessEntities: [BusinessEntity!]! @requireAuth
    businessEntity(id: Int!): BusinessEntity @requireAuth
  }

  input CreateBusinessEntityInput {
    type: BusinessEntityType!
    label: String!
    description: String!
    url: String
    adminId: Int!
  }

  input UpdateBusinessEntityInput {
    type: BusinessEntityType
    label: String
    description: String
    url: String
    adminId: Int
  }

  type Mutation {
    createBusinessEntity(input: CreateBusinessEntityInput!): BusinessEntity!
      @requireAuth
    updateBusinessEntity(
      id: Int!
      input: UpdateBusinessEntityInput!
    ): BusinessEntity! @requireAuth
    deleteBusinessEntity(id: Int!): BusinessEntity! @requireAuth
  }
`
