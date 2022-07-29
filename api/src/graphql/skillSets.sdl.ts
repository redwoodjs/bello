export const schema = gql`
  type SkillSet {
    id: Int!
    label: String!
    users: [User]!
    strengthOf: [User]
    idea: Idea
    ideaId: Int
  }

  type Query {
    skillSets: [SkillSet!]! @requireAuth
    skillSet(id: Int!): SkillSet @requireAuth
  }

  input CreateSkillSetInput {
    label: String!
    ideaId: Int
  }

  input UpdateSkillSetInput {
    label: String
    ideaId: Int
  }

  type Mutation {
    createSkillSet(input: CreateSkillSetInput!): SkillSet! @requireAuth
    updateSkillSet(id: Int!, input: UpdateSkillSetInput!): SkillSet!
      @requireAuth
    deleteSkillSet(id: Int!): SkillSet! @requireAuth
  }
`
