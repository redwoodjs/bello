import type { FindIdeas } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Ideas from 'src/components/Idea/Ideas'
import { useRecoilState } from 'recoil'
import { node } from 'src/pages/ExplorePage/components/Catalog/Catalog'

export const QUERY = gql`
  query FindIdeas {
    ideas {
      id
      createdAt
      authorId
      title
      problem
      solution
      chat
      conversation
      main
      specs
      captainId
      captain {
        id
        firstname
        lastname
      }
      champions {
        id
        firstname
        lastname
      }
      topics {
        id
        label
      }
      votes {
        id
        createdAt
        userId
        vote
      }
    }
    topics {
      id
      label
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No ideas yet. '}
      <Link to={routes.newIdea()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  ideas,
  topics,
  filter,
}: CellSuccessProps<FindIdeas & { filter: (idea) => boolean }>) => {
  const [state, setState] = useRecoilState(node)

  React.useEffect(() => {
    setState((facets) => ({
      ...facets,
      topics: topics.map((topic) => ({ ...topic, active: false })),
    }))
  }, [])

  return <Ideas ideas={ideas.filter(filter)} />
}
