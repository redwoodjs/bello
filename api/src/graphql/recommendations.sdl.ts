export const schema = gql`
  type Recommendation {
    id: Int!
    businessEntity: BusinessEntity!
    businessEntityId: Int!
    user: User!
    userId: Int!
    text: String!
  }

  type Query {
    recommendations: [Recommendation!]! @requireAuth
    recommendation(id: Int!): Recommendation @requireAuth
  }

  input CreateRecommendationInput {
    businessEntityId: Int!
    userId: Int!
    text: String!
  }

  input UpdateRecommendationInput {
    businessEntityId: Int
    userId: Int
    text: String
  }

  type Mutation {
    createRecommendation(input: CreateRecommendationInput!): Recommendation!
      @requireAuth
    updateRecommendation(
      id: Int!
      input: UpdateRecommendationInput!
    ): Recommendation! @requireAuth
    deleteRecommendation(id: Int!): Recommendation! @requireAuth
  }
`
