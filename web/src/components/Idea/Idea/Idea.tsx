import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_IDEA_MUTATION = gql`
  mutation DeleteIdeaMutation($id: Int!) {
    deleteIdea(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Idea = ({ idea }) => {
  const [deleteIdea] = useMutation(DELETE_IDEA_MUTATION, {
    onCompleted: () => {
      toast.success('Idea deleted')
      navigate(routes.ideas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete idea ' + id + '?')) {
      deleteIdea({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Idea {idea.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{idea.id}</td>
            </tr><tr>
              <th>Author id</th>
              <td>{idea.authorId}</td>
            </tr><tr>
              <th>Title</th>
              <td>{idea.title}</td>
            </tr><tr>
              <th>Problem</th>
              <td>{idea.problem}</td>
            </tr><tr>
              <th>Solution</th>
              <td>{idea.solution}</td>
            </tr><tr>
              <th>Chat</th>
              <td>{idea.chat}</td>
            </tr><tr>
              <th>Conversation</th>
              <td>{idea.conversation}</td>
            </tr><tr>
              <th>Main</th>
              <td>{idea.main}</td>
            </tr><tr>
              <th>Specs</th>
              <td>{idea.specs}</td>
            </tr><tr>
              <th>Captain id</th>
              <td>{idea.captainId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editIdea({ id: idea.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(idea.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Idea
