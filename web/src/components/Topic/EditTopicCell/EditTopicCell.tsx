import type { EditTopicById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TopicForm from 'src/components/Topic/TopicForm'

export const QUERY = gql`
  query EditTopicById($id: Int!) {
    topic: topic(id: $id) {
      id
      label
      description
      ideaId
    }
  }
`
const UPDATE_TOPIC_MUTATION = gql`
  mutation UpdateTopicMutation($id: Int!, $input: UpdateTopicInput!) {
    updateTopic(id: $id, input: $input) {
      id
      label
      description
      ideaId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ topic }: CellSuccessProps<EditTopicById>) => {
  const [updateTopic, { loading, error }] = useMutation(UPDATE_TOPIC_MUTATION, {
    onCompleted: () => {
      toast.success('Topic updated')
      navigate(routes.topics())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { ideaId: parseInt(input.ideaId), })
    updateTopic({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Topic {topic.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TopicForm topic={topic} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
