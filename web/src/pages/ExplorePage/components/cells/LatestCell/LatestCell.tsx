import { Badge, Spoiler } from '@mantine/core'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query LATEST_CELL {
    ideas: latest {
      id
      title
      problem
      topics {
        id
        label
      }
    }
  }
`

export const Success = ({ ideas }) => (
  <>
    {ideas?.length && (
      <section className="w-full flex flex-col justify-center items-center mt-12">
        <h1 className="text-4xl font-serif">Fresh from the top of our heads</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-12">
          {ideas?.map((idea) => (
            <Link to={routes.idea({ id: idea.id })} className="">
              <div
                key={`Latest - ${idea.title}`}
                className="border pb-10 relative rounded p-4 hover:shadow-lg h-full"
              >
                <p className="text-xl font-bold text-gray-700">{idea.title}</p>
                <div className="mt-1">
                  {idea.topics.map((topic) => (
                    <Badge color="yellow">{topic.label}</Badge>
                  ))}
                </div>
                <p className="mt-4">{idea.problem.substr(0, 130)}</p>
                <p className="text-right absolute bottom-0 right-0 p-4 font-bold text-red-700">
                  New!
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )}
  </>
)
