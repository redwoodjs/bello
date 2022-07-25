import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Idea/IdeasCell'

const DELETE_IDEA_MUTATION = gql`
  mutation DeleteIdeaMutation($id: Int!) {
    deleteIdea(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const IdeasList = ({ ideas }) => {
  const [deleteIdea] = useMutation(DELETE_IDEA_MUTATION, {
    onCompleted: () => {
      toast.success('Idea deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete idea ' + id + '?')) {
      deleteIdea({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Author id</th>
            <th>Title</th>
            <th>Problem</th>
            <th>Solution</th>
            <th>Chat</th>
            <th>Conversation</th>
            <th>Main</th>
            <th>Specs</th>
            <th>Captain id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {ideas.map((idea) => (
            <tr key={idea.id}>
              <td>{truncate(idea.id)}</td>
              <td>{truncate(idea.authorId)}</td>
              <td>{truncate(idea.title)}</td>
              <td>{truncate(idea.problem)}</td>
              <td>{truncate(idea.solution)}</td>
              <td>{truncate(idea.chat)}</td>
              <td>{truncate(idea.conversation)}</td>
              <td>{truncate(idea.main)}</td>
              <td>{truncate(idea.specs)}</td>
              <td>{truncate(idea.captainId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.idea({ id: idea.id })}
                    title={'Show idea ' + idea.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editIdea({ id: idea.id })}
                    title={'Edit idea ' + idea.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete idea ' + idea.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(idea.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IdeasList
