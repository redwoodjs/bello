import type { FindIdeaById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Idea from 'src/components/Idea/Idea'

export const QUERY = gql`
  query FindIdeaById($id: Int!) {
    idea: idea(id: $id) {
      id
      authorId
      author {
        id
        firstname
        lastname
        avatar
      }
      champions {
        id
        firstname
        lastname
        avatar
      }
      title
      problem
      solution
      chat
      conversation
      main
      specs
      captainId
      canEdit
      topics {
        id
        label
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Idea not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ idea }: CellSuccessProps<FindIdeaById>) => {
  return <Idea idea={idea} />
}
