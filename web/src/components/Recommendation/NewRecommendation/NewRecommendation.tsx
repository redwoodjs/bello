import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RecommendationForm from 'src/components/Recommendation/RecommendationForm'

import type { CreateRecommendationInput } from 'types/graphql'

const CREATE_RECOMMENDATION_MUTATION = gql`
  mutation CreateRecommendationMutation($input: CreateRecommendationInput!) {
    createRecommendation(input: $input) {
      id
    }
  }
`

const NewRecommendation = () => {
  const [createRecommendation, { loading, error }] = useMutation(
    CREATE_RECOMMENDATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Recommendation created')
        navigate(routes.recommendations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateRecommendationInput) => {
    createRecommendation({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Recommendation</h2>
      </header>
      <div className="rw-segment-main">
        <RecommendationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRecommendation
