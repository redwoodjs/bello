export const schema = gql`
  type User {
    id: Int!
    role: Role!
    hasOnboarded: Boolean!
    email: String!
    username: String!
    firstname: String
    lastname: String
    avatar: String
    strength: SkillSet!
    strengthId: Int!
    skills: [Skill]!
    skillSets: [SkillSet]!
    topics: [Topic]!
    authorOf: [Idea]!
    championFor: [Idea]!
    captainFor: [Idea]!
    follows: [Idea]!
    member: Member
  }

  enum Role {
    admin
    coreteam
    partner
    startup
    contributor
    default
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input CreateUserInput {
    role: Role!
    email: String!
    username: String!
    firstname: String
    lastname: String
    avatar: String
    strengthId: Int!
  }

  input UpdateUserInput {
    role: Role
    email: String
    username: String
    firstname: String
    lastname: String
    avatar: String
    strengthId: Int
  }

  input OnboardUserInput {
    role: Role
    email: String
    username: String
    firstname: String
    lastname: String
    avatar: String
    skillSets: [Int]
    topics: [Int]
    strengthId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    onboardUser(input: OnboardUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
