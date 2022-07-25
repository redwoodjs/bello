import type { EditSkillSetById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SkillSetForm from 'src/components/SkillSet/SkillSetForm'

export const QUERY = gql`
  query EditSkillSetById($id: Int!) {
    skillSet: skillSet(id: $id) {
      id
      label
      ideaId
    }
  }
`
const UPDATE_SKILL_SET_MUTATION = gql`
  mutation UpdateSkillSetMutation($id: Int!, $input: UpdateSkillSetInput!) {
    updateSkillSet(id: $id, input: $input) {
      id
      label
      ideaId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ skillSet }: CellSuccessProps<EditSkillSetById>) => {
  const [updateSkillSet, { loading, error }] = useMutation(UPDATE_SKILL_SET_MUTATION, {
    onCompleted: () => {
      toast.success('SkillSet updated')
      navigate(routes.skillSets())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { ideaId: parseInt(input.ideaId), })
    updateSkillSet({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit SkillSet {skillSet.id}</h2>
      </header>
      <div className="rw-segment-main">
        <SkillSetForm skillSet={skillSet} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
