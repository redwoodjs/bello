export const schema = gql`
  type Skill {
    id: Int!
    label: String!
    users: [User]!
    Idea: Idea
    ideaId: Int
  }

  type Query {
    skills: [Skill!]! @requireAuth
    skill(id: Int!): Skill @requireAuth
  }

  input CreateSkillInput {
    label: String!
    ideaId: Int
  }

  input UpdateSkillInput {
    label: String
    ideaId: Int
  }

  type Mutation {
    createSkill(input: CreateSkillInput!): Skill! @requireAuth
    updateSkill(id: Int!, input: UpdateSkillInput!): Skill! @requireAuth
    deleteSkill(id: Int!): Skill! @requireAuth
  }
`
