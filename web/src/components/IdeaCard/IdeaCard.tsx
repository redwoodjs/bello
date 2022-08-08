import { Badge } from '@mantine/core'
import { Link, routes } from '@redwoodjs/router'
import isNew from 'src/helpers/isNew'
import Vote from '../Vote/Vote'

const IdeaCard = ({ idea }) => (
  <Link to={routes.idea({ id: idea.id })} className="">
    <div
      key={`Latest - ${idea.title}`}
      className="border pb-12 relative rounded p-4 hover:shadow-lg h-full"
    >
      <p className="text-xl font-bold text-gray-700">{idea.title}</p>
      <div className="mt-1">
        {idea?.topics?.map((topic) => (
          <Badge key={`IdeaCard - Topic - ${topic.label}`} color="yellow">
            {topic.label}
          </Badge>
        ))}
      </div>
      <p className="mt-4">{idea.problem.substr(0, 130)}</p>
      <div className=" absolute bottom-0 right-0 p-4 w-full">
        <div className="grid grid-cols-2 pt-2">
          <Vote votes={idea.votes} ideaId={idea.id} />
          {isNew(idea) && (
            <p className="text-right font-bold text-red-700">New!</p>
          )}
        </div>
      </div>
    </div>
  </Link>
)

export default IdeaCard
