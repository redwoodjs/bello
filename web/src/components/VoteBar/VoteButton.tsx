const classes = {
  downvote: {
    button: 'flex-row border rounded-tl-xl rounded-bl-xl [&>span]:ml-2',
    active: 'bg-gray-200',
  },
  upvote: {
    button: 'flex-row-reverse border rounded-tr-xl rounded-br-xl [&>span]:mr-2',
    active: 'bg-blue-200 border-blue-200',
  },
}
const VoteButton = ({
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
    className={`shadow-inner px-2 flex ${
      classes[vote].button
    } justify-center items-center ${
      userVote === vote ? classes[vote].active : ''
    }`}
  >
    <Icon className={`text-${userVote ? 'cyan' : 'gray'}-500`} />{' '}
    <span className="text-sm">{number}</span>
  </button>
)

export default VoteButton
