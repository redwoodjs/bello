
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {  } from 'src/lib/formatters'

import type { DeleteRecommendationMutationVariables, FindRecommendationById } from 'types/graphql'

const DELETE_RECOMMENDATION_MUTATION = gql`
  mutation DeleteRecommendationMutation($id: Int!) {
    deleteRecommendation(id: $id) {
      id
    }
  }
`

interface Props {
  recommendation: NonNullable<FindRecommendationById['recommendation']>
}

const Recommendation = ({ recommendation }: Props) => {
  const [deleteRecommendation] = useMutation(DELETE_RECOMMENDATION_MUTATION, {
    onCompleted: () => {
      toast.success('Recommendation deleted')
      navigate(routes.recommendations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteRecommendationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete recommendation ' + id + '?')) {
      deleteRecommendation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Recommendation {recommendation.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{recommendation.id}</td>
            </tr><tr>
              <th>Business entity id</th>
              <td>{recommendation.businessEntityId}</td>
            </tr><tr>
              <th>User id</th>
              <td>{recommendation.userId}</td>
            </tr><tr>
              <th>Text</th>
              <td>{recommendation.text}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRecommendation({ id: recommendation.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(recommendation.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Recommendation
