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

export default function useVote({ count }) {
  const { isAuthenticated } = useAuth()

  const [castVote] = useMutation(MUTATION_CAST_VOTE, {
    refetchQueries: [{ query: QUERY }],
    onCompleted() {
      toast('Thanks for the feedback!')
    },
  })

  return {
    canVote: isAuthenticated,
    castVote(ideaId: Number, vote: Vote) {
      return castVote({ variables: { ideaId, input: { vote } } })
    },
    downvotes: count.downvotes,
    upvotes: count.upvotes,
    total: count.total,
  }
}
