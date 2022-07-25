import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Member/MembersCell'

const DELETE_MEMBER_MUTATION = gql`
  mutation DeleteMemberMutation($id: Int!) {
    deleteMember(id: $id) {
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

const MembersList = ({ members }) => {
  const [deleteMember] = useMutation(DELETE_MEMBER_MUTATION, {
    onCompleted: () => {
      toast.success('Member deleted')
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
    if (confirm('Are you sure you want to delete member ' + id + '?')) {
      deleteMember({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Linkedin</th>
            <th>Discord</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{truncate(member.id)}</td>
              <td>{truncate(member.userId)}</td>
              <td>{truncate(member.title)}</td>
              <td>{truncate(member.description)}</td>
              <td>{truncate(member.linkedin)}</td>
              <td>{truncate(member.discord)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.member({ id: member.id })}
                    title={'Show member ' + member.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMember({ id: member.id })}
                    title={'Edit member ' + member.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete member ' + member.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(member.id)}
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

export default MembersList
