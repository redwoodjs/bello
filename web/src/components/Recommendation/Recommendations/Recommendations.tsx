import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Recommendation/RecommendationsCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteRecommendationMutationVariables, FindRecommendations } from 'types/graphql'

const DELETE_RECOMMENDATION_MUTATION = gql`
  mutation DeleteRecommendationMutation($id: Int!) {
    deleteRecommendation(id: $id) {
      id
    }
  }
`

const RecommendationsList = ({ recommendations }: FindRecommendations) => {
  const [deleteRecommendation] = useMutation(DELETE_RECOMMENDATION_MUTATION, {
    onCompleted: () => {
      toast.success('Recommendation deleted')
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

  const onDeleteClick = (id: DeleteRecommendationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete recommendation ' + id + '?')) {
      deleteRecommendation({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Business entity id</th>
            <th>User id</th>
            <th>Text</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((recommendation) => (
            <tr key={recommendation.id}>
              <td>{truncate(recommendation.id)}</td>
              <td>{truncate(recommendation.businessEntityId)}</td>
              <td>{truncate(recommendation.userId)}</td>
              <td>{truncate(recommendation.text)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.recommendation({ id: recommendation.id })}
                    title={'Show recommendation ' + recommendation.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRecommendation({ id: recommendation.id })}
                    title={'Edit recommendation ' + recommendation.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete recommendation ' + recommendation.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(recommendation.id)}
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

export default RecommendationsList
