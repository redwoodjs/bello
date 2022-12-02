import { Badge } from '@mantine/core'
import { Link, routes } from '@redwoodjs/router'
import isNew from 'src/helpers/isNew'
import { BadgeColors } from 'src/constants'
import { Idea } from 'types/graphql'
import VoteBar from '../VoteBar/VoteBar'
import StatusIcon from '../StatusIcon/StatusIcon'

export enum Variant {
  brief = 'brief',
  new = 'new',
  standard = 'standard',
}

export interface IdeaCardProps {
  variant: Variant
  idea: Idea
  noText?: boolean
}

export interface StandardProps extends Omit<IdeaCardProps, 'variant'> {}

export interface BriefProps extends Omit<StandardProps, 'noText'> {}

export interface NewProps extends BriefProps {}

const Standard: React.FC<StandardProps> = ({ idea, noText = false }) => (
  <Link to={routes.idea({ id: idea.id })} className="">
    <div
      key={`Latest - ${idea.title}`}
      className={`border flex flex-col h-full border-amber-400 rounded hover:shadow-lg h-full ${
        isNew(idea) ? 'rounded-br-3xl' : ''
      }`}
    >
      <p className="text-lg font-bold bg-amber-600 p-4 text-white">
        {idea.title}
      </p>
      <div className="p-4 flex flex-col grow justify-between">
        <div>
          <div className="mt-1">
            {idea?.topics?.map((topic) => (
              <Badge
                key={`IdeaCard - Topic - ${topic.label}`}
                color={BadgeColors.topic}
              >
                {topic.label}
              </Badge>
            ))}
          </div>
          {!noText && <p className="mt-4">{idea.problem.substr(0, 130)}</p>}
        </div>
        <div className="grid grid-cols-2 pt-2 items-center">
          <VoteBar
            ideaId={idea.id}
            count={{ ...idea.count, total: idea.champions.length }}
            userVote={idea.userVote}
          />
          <div className="flex flex-row justify-end items-center">
            <StatusIcon status={idea.status} />
            {!isNew(idea) && (
              <p className="ml-2 text-right text-sm font-bold text-red-700">
                New!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  </Link>
)

const Brief: React.FC<BriefProps> = ({ idea }) => (
  <Link to={routes.idea({ id: idea.id })} className="">
    <div
      key={`Latest - ${idea.title}`}
      className={`border pb-12 relative rounded p-4 hover:shadow-lg h-full ${
        !isNew(idea) ? 'rounded-br-3xl' : ''
      }`}
    >
      <p className="text-sm font-bold text-gray-700">{idea.title}</p>
      <div className="mt-1">
        {idea?.topics?.map((topic) => (
          <Badge
            key={`IdeaCard - Topic - ${topic.label}`}
            color={BadgeColors.topic}
          >
            {topic.label}
          </Badge>
        ))}
      </div>
      <div className=" absolute bottom-0 right-0 p-4 w-full">
        <div className="grid grid-cols-2 pt-2 items-center">
          <VoteBar
            ideaId={idea.id}
            count={idea.count}
            userVote={idea.userVote}
          />
          {isNew(idea) && (
            <p className="text-right text-sm font-bold text-red-700">New!</p>
          )}
        </div>
      </div>
    </div>
  </Link>
)

const New: React.FC<BriefProps> = ({ idea }) => (
  <Link to={routes.idea({ id: idea.id })}>
    <div
      key={`Latest - ${idea.title}`}
      className="border pb-6 relative rounded p-2 hover:shadow-lg h-full"
    >
      <p className="text-sm font-bold text-gray-700">{idea.title}</p>
      <div className="mt-1">
        {idea?.topics?.map((topic) => (
          <Badge
            key={`IdeaCard - Topic - ${topic.label}`}
            color={BadgeColors.topic}
          >
            {topic.label}
          </Badge>
        ))}
      </div>
      <div className=" absolute bottom-0 right-0 p-2 w-full">
        <p className="text-right text-sm font-bold text-red-700">New!</p>
      </div>
    </div>
  </Link>
)

const Variants = {
  [Variant.brief]: Brief,
  [Variant.new]: New,
  [Variant.standard]: Standard,
}

export default function IdeaCard({
  variant = Variant.standard,
  ...props
}: IdeaCardProps) {
  const Element = Variants[variant]

  return <Element {...props} />
}
