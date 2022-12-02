export const schema = gql`
  type Member {
    id: Int!
    user: User!
    userId: Int!
    title: String
    description: String
    linkedin: String
    discord: String
  }

  type Query {
    members: [Member!]! @skipAuth
    member(id: Int!): Member @skipAuth
  }

  input CreateMemberInput {
    userId: Int!
    title: String
    description: String
    linkedin: String
    discord: String
  }

  input UpdateMemberInput {
    userId: Int
    title: String
    description: String
    linkedin: String
    discord: String
  }

  type Mutation {
    createMember(input: CreateMemberInput!): Member! @requireAuth
    updateMember(id: Int!, input: UpdateMemberInput!): Member! @requireAuth
    deleteMember(id: Int!): Member! @requireAuth
  }
`
