import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SkillSetForm from 'src/components/SkillSet/SkillSetForm'

const CREATE_SKILL_SET_MUTATION = gql`
  mutation CreateSkillSetMutation($input: CreateSkillSetInput!) {
    createSkillSet(input: $input) {
      id
    }
  }
`

const NewSkillSet = () => {
  const [createSkillSet, { loading, error }] = useMutation(CREATE_SKILL_SET_MUTATION, {
    onCompleted: () => {
      toast.success('SkillSet created')
      navigate(routes.skillSets())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { ideaId: parseInt(input.ideaId), })
    createSkillSet({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New SkillSet</h2>
      </header>
      <div className="rw-segment-main">
        <SkillSetForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSkillSet
