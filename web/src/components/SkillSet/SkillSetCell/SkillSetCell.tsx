import type { FindSkillSetById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SkillSet from 'src/components/SkillSet/SkillSet'

export const QUERY = gql`
  query FindSkillSetById($id: Int!) {
    skillSet: skillSet(id: $id) {
      id
      label
      ideaId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>SkillSet not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ skillSet }: CellSuccessProps<FindSkillSetById>) => {
  return <SkillSet skillSet={skillSet} />
}
