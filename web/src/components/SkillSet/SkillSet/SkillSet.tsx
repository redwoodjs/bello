import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_SKILL_SET_MUTATION = gql`
  mutation DeleteSkillSetMutation($id: Int!) {
    deleteSkillSet(id: $id) {
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

const SkillSet = ({ skillSet }) => {
  const [deleteSkillSet] = useMutation(DELETE_SKILL_SET_MUTATION, {
    onCompleted: () => {
      toast.success('SkillSet deleted')
      navigate(routes.skillSets())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete skillSet ' + id + '?')) {
      deleteSkillSet({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">SkillSet {skillSet.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{skillSet.id}</td>
            </tr><tr>
              <th>Label</th>
              <td>{skillSet.label}</td>
            </tr><tr>
              <th>Idea id</th>
              <td>{skillSet.ideaId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSkillSet({ id: skillSet.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(skillSet.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default SkillSet
