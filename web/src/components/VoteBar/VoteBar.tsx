import { Tooltip } from '@mantine/core'
import { IconThumbDown, IconThumbUp } from '@tabler/icons'
import Pine from '../Icons/Pine'
import useVote from './useVote'
import VoteButton from './VoteButton'

const Votes = ({
  downvotes,
  upvotes,
  ideaId,
  canVote,
  total,
  userVote,
  castVote,
}) => (
  <div className="grid grid-cols-3">
    <VoteButton
      canVote={canVote}
      Icon={IconThumbDown}
      number={downvotes}
      userVote={userVote}
      vote="downvote"
      onClick={() => castVote(ideaId, 'downvote')}
    />
    {total ? (
      <Tooltip label={'This idea has Champions!'}>
        <div className="border-t border-b flex flex-row justify-center items-center align-middle text-sm font-bold shadow-inner">
          <Pine className="mr-2" />
          {total}
        </div>
      </Tooltip>
    ) : (
      <div className="border-t border-b flex flex-row justify-center items-center align-middle text-sm font-bold shadow-inner">
        -
      </div>
    )}

    <VoteButton
      canVote={canVote}
      Icon={IconThumbUp}
      number={upvotes}
      userVote={userVote}
      onClick={() => castVote(ideaId, 'upvote')}
    />
  </div>
)

export default function VoteBar({ count, userVote, ideaId }) {
  return <Votes {...useVote({ count })} userVote={userVote} ideaId={ideaId} />
}
