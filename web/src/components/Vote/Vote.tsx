import { IconThumbDown, IconThumbUp } from '@tabler/icons'
import useVote from './useVote'

const classes = {
  downvote: {
    button: 'flex-row border rounded-tl-xl rounded-bl-xl [&>span]:ml-2',
    active: 'bg-gray-200',
  },
  upvote: {
    button: 'flex-row-reverse border rounded-tr-xl rounded-br-xl [&>span]:mr-2',
    active: 'bg-blue-200',
  },
}

const Vote = ({
  onClick,
  Icon,
  canVote,
  number,
  vote = 'upvote',
  userVote = '',
}) => (
  <button
    type="button"
    disabled={!canVote}
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      onClick()
    }}
    className={`px-2 flex ${classes[vote].button} justify-center items-center ${
      userVote === vote ? classes[vote].active : ''
    }`}
  >
    <Icon className={`text-${userVote ? 'cyan' : 'gray'}-500`} />{' '}
    <span className="text-sm">{number}</span>
  </button>
)

const Votes = ({
  downvotes,
  upvotes,
  ideaId,
  canVote,
  total,
  userVote,
  castVote,
}) => (
  <div className="grid grid-cols-3 ">
    <Vote
      canVote={canVote}
      Icon={IconThumbDown}
      number={downvotes}
      userVote={userVote}
      vote="downvote"
      onClick={() => castVote(ideaId, 'downvote')}
    />
    <div className="border-t border-b flex flex-col justify-center items-center align-middle text-sm font-bold">
      {total}
    </div>
    <Vote
      canVote={canVote}
      Icon={IconThumbUp}
      number={upvotes}
      userVote={userVote}
      onClick={() => castVote(ideaId, 'upvote')}
    />
  </div>
)

export default ({ votes, ideaId }) => (
  <Votes {...useVote({ votes })} ideaId={ideaId} />
)
