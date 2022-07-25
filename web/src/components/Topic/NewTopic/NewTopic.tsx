import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TopicForm from 'src/components/Topic/TopicForm'

const CREATE_TOPIC_MUTATION = gql`
  mutation CreateTopicMutation($input: CreateTopicInput!) {
    createTopic(input: $input) {
      id
    }
  }
`

const NewTopic = () => {
  const [createTopic, { loading, error }] = useMutation(CREATE_TOPIC_MUTATION, {
    onCompleted: () => {
      toast.success('Topic created')
      navigate(routes.topics())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { ideaId: parseInt(input.ideaId), })
    createTopic({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Topic</h2>
      </header>
      <div className="rw-segment-main">
        <TopicForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTopic
