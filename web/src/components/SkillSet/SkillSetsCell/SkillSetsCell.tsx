import type { FindSkillSets } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SkillSets from 'src/components/SkillSet/SkillSets'
import { SkillSetSelectorProps } from 'src/pages/User/OnboardingPage/components/steps/SkillSetSelector/SkillSetSelector'

export const QUERY = gql`
  query FindSkillSets {
    skillSets {
      id
      label
      ideaId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No skillSets yet. '}
      <Link to={routes.newSkillSet()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  skillSets,
  Component = SkillSets,
  componentProps,
}: CellSuccessProps<
  FindSkillSets & {
    Component: React.FC<{ skillSets?: FindSkillSets['skillSets'] }>
    componentProps: SkillSetSelectorProps
  }
>) => <Component skillSets={skillSets} {...componentProps} />
