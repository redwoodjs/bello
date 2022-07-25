import type { FindSkills } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Skills from 'src/components/Skill/Skills'

export const QUERY = gql`
  query FindSkills {
    skills {
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
      {'No skills yet. '}
      <Link
        to={routes.newSkill()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ skills }: CellSuccessProps<FindSkills>) => {
  return <Skills skills={skills} />
}
