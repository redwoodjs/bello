import type { FindRecommendations } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Recommendations from 'src/components/Recommendation/Recommendations'

export const QUERY = gql`
  query FindRecommendations {
    recommendations {
      id
      businessEntityId
      userId
      text
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No recommendations yet. '}
      <Link
        to={routes.newRecommendation()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ recommendations }: CellSuccessProps<FindRecommendations>) => {
  return <Recommendations recommendations={recommendations} />
}
