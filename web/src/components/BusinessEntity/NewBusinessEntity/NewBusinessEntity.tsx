import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BusinessEntityForm from 'src/components/BusinessEntity/BusinessEntityForm'

import type { CreateBusinessEntityInput } from 'types/graphql'

const CREATE_BUSINESS_ENTITY_MUTATION = gql`
  mutation CreateBusinessEntityMutation($input: CreateBusinessEntityInput!) {
    createBusinessEntity(input: $input) {
      id
    }
  }
`

const NewBusinessEntity = () => {
  const [createBusinessEntity, { loading, error }] = useMutation(
    CREATE_BUSINESS_ENTITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('BusinessEntity created')
        navigate(routes.businessEntities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateBusinessEntityInput) => {
    createBusinessEntity({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New BusinessEntity</h2>
      </header>
      <div className="rw-segment-main">
        <BusinessEntityForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBusinessEntity
