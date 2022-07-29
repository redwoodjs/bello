export const schema = gql`
  type Idea {
    id: Int!
    author: User!
    authorId: Int!
    title: String!
    problem: String!
    solution: String
    chat: String
    conversation: String
    main: String
    specs: String
    captain: User
    captainId: Int
    champions: [User]!
    topics: [Topic]!
    hires: [SkillSet]!
    technologies: [Skill]!
    followers: [User]!
    canEdit: Boolean
  }

  type Query {
    latest: [Idea] @skipAuth
    ideas: [Idea!]! @skipAuth
    idea(id: Int!): Idea @skipAuth
  }

  input CreateIdeaInput {
    title: String!
    problem: String!
    solution: String
    topics: [Int]!
  }

  input UpdateIdeaInput {
    title: String
    problem: String
    solution: String
    chat: String
    conversation: String
    main: String
    specs: String
    captainId: Int
  }

  type Mutation {
    createIdea(input: CreateIdeaInput!): Idea! @requireAuth
    updateIdea(id: Int!, input: UpdateIdeaInput!): Idea! @requireAuth
    deleteIdea(id: Int!): Idea! @requireAuth
  }
`
