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
  }

  type Query {
    ideas: [Idea!]! @requireAuth
    idea(id: Int!): Idea @requireAuth
  }

  input CreateIdeaInput {
    authorId: Int!
    title: String!
    problem: String!
    solution: String
    chat: String
    conversation: String
    main: String
    specs: String
    captainId: Int
  }

  input UpdateIdeaInput {
    authorId: Int
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
