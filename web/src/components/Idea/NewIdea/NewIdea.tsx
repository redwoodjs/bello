import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import IdeaForm from './Form'

const CREATE_IDEA_MUTATION = gql`
  mutation CreateIdeaMutation($input: CreateIdeaInput!) {
    createIdea(input: $input) {
      id
    }
  }
`

const NewIdea = () => {
  const [createIdea, { loading, error }] = useMutation(CREATE_IDEA_MUTATION, {
    onCompleted: () => {
      toast.success('Idea created')
      navigate(routes.ideas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      topics: input.topics.map(parseInt),
    })

    createIdea({ variables: { input: castInput } })
  }

  return (
    <div className="">
      <header className="">
        <h1 className="text-6xl text-center font-serif">Idea Proposal</h1>
      </header>
      <div className="">
        <IdeaForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewIdea
