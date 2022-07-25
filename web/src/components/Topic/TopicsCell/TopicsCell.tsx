import type { FindTopics } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Topics from 'src/components/Topic/Topics'

export const QUERY = gql`
  query FindTopics {
    topics {
      id
      label
      description
      ideaId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No topics yet. '}
      <Link to={routes.newTopic()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  topics,
  Component = Topics,
  componentProps,
}: CellSuccessProps<
  FindTopics & {
    Component?: React.FC<{ topics?: FindTopics['topics'] }>
    componentProps?: { topics?: FindTopics['topics']; name?: string }
  }
>) => {
  return <Component topics={topics} {...componentProps} />
}
