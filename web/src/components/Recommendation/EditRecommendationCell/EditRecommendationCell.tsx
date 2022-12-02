import type { EditRecommendationById, UpdateRecommendationInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RecommendationForm from 'src/components/Recommendation/RecommendationForm'

export const QUERY = gql`
  query EditRecommendationById($id: Int!) {
    recommendation: recommendation(id: $id) {
      id
      businessEntityId
      userId
      text
    }
  }
`
const UPDATE_RECOMMENDATION_MUTATION = gql`
  mutation UpdateRecommendationMutation($id: Int!, $input: UpdateRecommendationInput!) {
    updateRecommendation(id: $id, input: $input) {
      id
      businessEntityId
      userId
      text
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ recommendation }: CellSuccessProps<EditRecommendationById>) => {
  const [updateRecommendation, { loading, error }] = useMutation(
    UPDATE_RECOMMENDATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Recommendation updated')
        navigate(routes.recommendations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateRecommendationInput,
    id: EditRecommendationById['recommendation']['id']
  ) => {
    updateRecommendation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Recommendation {recommendation?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <RecommendationForm recommendation={recommendation} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
