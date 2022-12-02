import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/BusinessEntity/BusinessEntitiesCell'
import { formatEnum, truncate } from 'src/lib/formatters'

import type { DeleteBusinessEntityMutationVariables, FindBusinessEntities } from 'types/graphql'

const DELETE_BUSINESS_ENTITY_MUTATION = gql`
  mutation DeleteBusinessEntityMutation($id: Int!) {
    deleteBusinessEntity(id: $id) {
      id
    }
  }
`

const BusinessEntitiesList = ({ businessEntities }: FindBusinessEntities) => {
  const [deleteBusinessEntity] = useMutation(DELETE_BUSINESS_ENTITY_MUTATION, {
    onCompleted: () => {
      toast.success('BusinessEntity deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteBusinessEntityMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete businessEntity ' + id + '?')) {
      deleteBusinessEntity({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Label</th>
            <th>Description</th>
            <th>Url</th>
            <th>Admin id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {businessEntities.map((businessEntity) => (
            <tr key={businessEntity.id}>
              <td>{truncate(businessEntity.id)}</td>
              <td>{formatEnum(businessEntity.type)}</td>
              <td>{truncate(businessEntity.label)}</td>
              <td>{truncate(businessEntity.description)}</td>
              <td>{truncate(businessEntity.url)}</td>
              <td>{truncate(businessEntity.adminId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.businessEntity({ id: businessEntity.id })}
                    title={'Show businessEntity ' + businessEntity.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBusinessEntity({ id: businessEntity.id })}
                    title={'Edit businessEntity ' + businessEntity.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete businessEntity ' + businessEntity.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(businessEntity.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BusinessEntitiesList
