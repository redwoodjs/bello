import type { FindIdeas } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Ideas from 'src/components/Idea/Ideas'
import { useRecoilState } from 'recoil'
import node from 'src/pages/ExplorePage/components/Catalog/node'
import { UseCatalogReturn } from 'src/pages/ExplorePage/components/Catalog/useCatalog'

export const QUERY = gql`
  query FindIdeas {
    ideas {
      id
      createdAt
      authorId
      status
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
      count {
        total
        upvotes
        downvotes
      }
      userVote
    }
    topics {
      id
      label
    }
  }
`

export const Loading = () => <div>Loading ideas...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No ideas yet. '}
      <Link to={routes.newIdea()} className="rw-link">
        {'Report one?'}
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
  process,
}: CellSuccessProps<FindIdeas & { process: UseCatalogReturn['process'] }>) => {
  const [_state, setState] = useRecoilState(node)

  React.useEffect(() => {
    /**
     * On first render we need all facets to be deactivated.
     */
    setState((facets) => ({
      ...facets,
      topics: topics.map((topic) => ({ ...topic, active: false })),
    }))
  }, [])

  return <Ideas ideas={process(ideas)} />
}
