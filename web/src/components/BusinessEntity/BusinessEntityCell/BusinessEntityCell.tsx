import type { FindBusinessEntityById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BusinessEntity from 'src/components/BusinessEntity/BusinessEntity'

export const QUERY = gql`
  query FindBusinessEntityById($id: Int!) {
    businessEntity: businessEntity(id: $id) {
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

export const Empty = () => <div>BusinessEntity not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ businessEntity }: CellSuccessProps<FindBusinessEntityById>) => {
  return <BusinessEntity businessEntity={businessEntity} />
}
