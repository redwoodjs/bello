import type { EditMemberById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MemberForm from 'src/components/Member/MemberForm'

export const QUERY = gql`
  query EditMemberById($id: Int!) {
    member: member(id: $id) {
      id
      userId
      title
      description
      linkedin
      discord
    }
  }
`
const UPDATE_MEMBER_MUTATION = gql`
  mutation UpdateMemberMutation($id: Int!, $input: UpdateMemberInput!) {
    updateMember(id: $id, input: $input) {
      id
      userId
      title
      description
      linkedin
      discord
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ member }: CellSuccessProps<EditMemberById>) => {
  const [updateMember, { loading, error }] = useMutation(UPDATE_MEMBER_MUTATION, {
    onCompleted: () => {
      toast.success('Member updated')
      navigate(routes.members())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId), })
    updateMember({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Member {member.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MemberForm member={member} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
