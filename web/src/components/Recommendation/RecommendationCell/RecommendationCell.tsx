import type { FindRecommendationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Recommendation from 'src/components/Recommendation/Recommendation'

export const QUERY = gql`
  query FindRecommendationById($id: Int!) {
    recommendation: recommendation(id: $id) {
      id
      businessEntityId
      userId
      text
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Recommendation not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ recommendation }: CellSuccessProps<FindRecommendationById>) => {
  return <Recommendation recommendation={recommendation} />
}
