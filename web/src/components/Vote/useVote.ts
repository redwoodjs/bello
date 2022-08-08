import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { Vote } from 'types/graphql'
import { QUERY } from 'src/components/Idea/IdeasCell'

const MUTATION_CAST_VOTE = gql`
  mutation MUTATION_CAST_VOTE($ideaId: Int!, $input: CastVoteInput!) {
    CastVote(ideaId: $ideaId, input: $input) {
      id
    }
  }
`

export default function useVote({ votes }) {
  const { isAuthenticated, currentUser } = useAuth()

  const [castVote] = useMutation(MUTATION_CAST_VOTE, {
    refetchQueries: [{ query: QUERY }],
    onCompleted(data) {
      toast('Vote accepted!')
    },
  })

  return {
    canVote: isAuthenticated,
    castVote(ideaId: Number, vote: Vote) {
      return castVote({ variables: { ideaId, input: { vote } } })
    },
    upvotes: votes?.filter(({ vote }) => vote === 'upvote').length,
    downvotes: votes?.filter(({ vote }) => vote === 'downvote').length,
    total: votes?.length,
    userVote:
      isAuthenticated &&
      currentUser &&
      votes
        ?.filter(({ userId }) => userId === currentUser?.id)
        .reduce((a, i) => i.vote, ''),
  }
}
