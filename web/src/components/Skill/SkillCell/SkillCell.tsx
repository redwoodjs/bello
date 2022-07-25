import type { FindSkillById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Skill from 'src/components/Skill/Skill'

export const QUERY = gql`
  query FindSkillById($id: Int!) {
    skill: skill(id: $id) {
      id
      label
      ideaId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Skill not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ skill }: CellSuccessProps<FindSkillById>) => {
  return <Skill skill={skill} />
}
