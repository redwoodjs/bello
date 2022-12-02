
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum,  } from 'src/lib/formatters'

import type { DeleteBusinessEntityMutationVariables, FindBusinessEntityById } from 'types/graphql'

const DELETE_BUSINESS_ENTITY_MUTATION = gql`
  mutation DeleteBusinessEntityMutation($id: Int!) {
    deleteBusinessEntity(id: $id) {
      id
    }
  }
`

interface Props {
  businessEntity: NonNullable<FindBusinessEntityById['businessEntity']>
}

const BusinessEntity = ({ businessEntity }: Props) => {
  const [deleteBusinessEntity] = useMutation(DELETE_BUSINESS_ENTITY_MUTATION, {
    onCompleted: () => {
      toast.success('BusinessEntity deleted')
      navigate(routes.businessEntities())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteBusinessEntityMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete businessEntity ' + id + '?')) {
      deleteBusinessEntity({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            BusinessEntity {businessEntity.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{businessEntity.id}</td>
            </tr><tr>
              <th>Type</th>
              <td>{formatEnum(businessEntity.type)}</td>
            </tr><tr>
              <th>Label</th>
              <td>{businessEntity.label}</td>
            </tr><tr>
              <th>Description</th>
              <td>{businessEntity.description}</td>
            </tr><tr>
              <th>Url</th>
              <td>{businessEntity.url}</td>
            </tr><tr>
              <th>Admin id</th>
              <td>{businessEntity.adminId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBusinessEntity({ id: businessEntity.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(businessEntity.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default BusinessEntity
