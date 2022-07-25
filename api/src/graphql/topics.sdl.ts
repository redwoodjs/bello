export const schema = gql`
  type Topic {
    id: Int!
    label: String!
    description: String!
    users: [User]!
    Idea: Idea
    ideaId: Int
  }

  type Query {
    topics: [Topic!]! @requireAuth
    topic(id: Int!): Topic @requireAuth
  }

  input CreateTopicInput {
    label: String!
    description: String!
    ideaId: Int
  }

  input UpdateTopicInput {
    label: String
    description: String
    ideaId: Int
  }

  type Mutation {
    createTopic(input: CreateTopicInput!): Topic! @requireAuth
    updateTopic(id: Int!, input: UpdateTopicInput!): Topic! @requireAuth
    deleteTopic(id: Int!): Topic! @requireAuth
  }
`
