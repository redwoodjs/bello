import type { FindBusinessEntities } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BusinessEntities from 'src/components/BusinessEntity/BusinessEntities'

export const QUERY = gql`
  query FindBusinessEntities {
    businessEntities {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No businessEntities yet. '}
      <Link
        to={routes.newBusinessEntity()}
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

export const Success = ({ businessEntities }: CellSuccessProps<FindBusinessEntities>) => {
  return <BusinessEntities businessEntities={businessEntities} />
}
