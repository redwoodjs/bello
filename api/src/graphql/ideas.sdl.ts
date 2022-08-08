export const schema = gql`
  enum Vote {
    downvote
    upvote
  }

  type IdeaVote {
    id: Int!
    ideaId: Int!
    userId: Int!
    createdAt: Date!
    vote: Vote!
  }

  type Idea {
    id: Int!
    createdAt: Date!
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
    votes: [IdeaVote]
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

  input CastVoteInput {
    vote: Vote
  }

  type Mutation {
    createIdea(input: CreateIdeaInput!): Idea! @requireAuth
    updateIdea(id: Int!, input: UpdateIdeaInput!): Idea! @requireAuth
    deleteIdea(id: Int!): Idea! @requireAuth
    ChampionIdea(id: Int!): Idea! @requireAuth
    CastVote(ideaId: Int!, input: CastVoteInput!): IdeaVote! @requireAuth
  }
`
