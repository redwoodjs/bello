import { Badge, Skeleton } from '@mantine/core'
import { BadgeColors } from 'src/constants'

export const QUERY = gql`
  query ACTIVE_TOPICS_CELL {
    topics: activeTopics {
      id
      label
      description
      nbIdeas
    }
  }
`

export const Loading = () => (
  <>
    {[...Array(3)].map((_x, k) => (
      <React.Fragment key={`ActiveTopics - Loading - ${k}`}>
        <Skeleton height={8} radius="xl" mt={2} />
        <Skeleton height={8} radius="xl" mt={2} />
        <Skeleton height={8} radius="xl" mt={2} />
      </React.Fragment>
    ))}
  </>
)

export const Success = ({ topics }) => (
  <>
    {topics?.length &&
      topics.map((topic) => (
        <div
          className="border rounded p-4 w-full"
          key={`ActiveTopicsCell - ${topic.label}`}
        >
          <Badge color={BadgeColors.topic}>{topic.label}</Badge>
          <p className="mt-2 text-sm">{topic.description}</p>
          <p className="text-right underline text-xs">
            See {topic.nbIdeas} idea-s
          </p>
        </div>
      ))}
  </>
)
