import type { FindTopicById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Topic from 'src/components/Topic/Topic'

export const QUERY = gql`
  query FindTopicById($id: Int!) {
    topic: topic(id: $id) {
      id
      label
      description
      ideaId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Topic not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ topic }: CellSuccessProps<FindTopicById>) => {
  return <Topic topic={topic} />
}
