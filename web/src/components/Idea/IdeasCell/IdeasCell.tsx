import type { FindIdeas } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Ideas from 'src/components/Idea/Ideas'

export const QUERY = gql`
  query FindIdeas {
    ideas {
      id
      authorId
      title
      problem
      solution
      chat
      conversation
      main
      specs
      captainId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No ideas yet. '}
      <Link
        to={routes.newIdea()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ ideas }: CellSuccessProps<FindIdeas>) => {
  return <Ideas ideas={ideas} />
}
