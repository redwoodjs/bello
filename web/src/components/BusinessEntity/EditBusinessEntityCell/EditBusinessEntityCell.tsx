import type { EditBusinessEntityById, UpdateBusinessEntityInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BusinessEntityForm from 'src/components/BusinessEntity/BusinessEntityForm'

export const QUERY = gql`
  query EditBusinessEntityById($id: Int!) {
    businessEntity: businessEntity(id: $id) {
      id
      type
      label
      description
      url
      adminId
    }
  }
`
const UPDATE_BUSINESS_ENTITY_MUTATION = gql`
  mutation UpdateBusinessEntityMutation($id: Int!, $input: UpdateBusinessEntityInput!) {
    updateBusinessEntity(id: $id, input: $input) {
      id
      type
      label
      description
      url
      adminId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ businessEntity }: CellSuccessProps<EditBusinessEntityById>) => {
  const [updateBusinessEntity, { loading, error }] = useMutation(
    UPDATE_BUSINESS_ENTITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('BusinessEntity updated')
        navigate(routes.businessEntities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateBusinessEntityInput,
    id: EditBusinessEntityById['businessEntity']['id']
  ) => {
    updateBusinessEntity({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit BusinessEntity {businessEntity?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <BusinessEntityForm businessEntity={businessEntity} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
