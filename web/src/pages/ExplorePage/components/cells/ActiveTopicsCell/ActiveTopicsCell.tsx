import { Card, Group } from '@mantine/core'

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

export const Success = ({ topics }) => (
  <>
    {topics?.length && (
      <section className="w-full flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-serif">Active topics lately</h1>
        <div className="grid grid-cols-3 gap-4 mt-8 w-full">
          {topics.map((topic) => (
            <div className="border rounded p-4 w-full">
              <p className="text-sm font-bold">{topic.label}</p>
              <p className="mt-2 text-sm">{topic.description}</p>
              <p className="text-right underline text-xs">
                See {topic.nbIdeas} ideas
              </p>
            </div>
          ))}
        </div>
      </section>
    )}
  </>
)
