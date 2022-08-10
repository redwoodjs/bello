import { Skeleton } from '@mantine/core'
import IdeaCard, { Variant } from 'src/components/IdeaCard/IdeaCard'

export const QUERY = gql`
  query LATEST_CELL {
    ideas: latest {
      id
      createdAt
      title
      problem
      topics {
        id
        label
      }
    }
  }
`

export const Loading = () => (
  <>
    {[...Array(6)].map((_x, k) => (
      <React.Fragment key={`LatestCell - Loading - ${k}`}>
        <Skeleton height={12} radius="xl" />
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
      </React.Fragment>
    ))}
  </>
)

export const Success = ({ ideas }) => (
  <>
    {ideas?.length &&
      ideas?.map((idea) => (
        <IdeaCard
          key={`LatestCell - ${idea.title}`}
          idea={idea}
          variant={Variant.new}
          noText
        />
      ))}
  </>
)
