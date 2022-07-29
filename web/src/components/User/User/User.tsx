import { Link, routes, useParams } from '@redwoodjs/router'
import Person, { Variant } from 'src/components/Person/Person'
import { IconBroadcast, IconEdit } from '@tabler/icons'
import { useAuth } from '@redwoodjs/auth'
import { Badge } from '@mantine/core'

const User = ({ user }) => {
  const { currentUser } = useAuth()

  const params = useParams()

  return (
    <>
      <section className="flex flex-col justify-center">
        <header className="">
          <Person {...user} variant={Variant.portrait} />
        </header>
      </section>
      <nav className="flex flex-col w-fit">
        {currentUser?.id === parseInt(params.id) ? (
          <Link to={routes.editUser({ id: user.id })} className="text-gray-500">
            <IconEdit />
          </Link>
        ) : (
          <button
            type="button"
            className="text-gray-500 flex flex-row items-center border rounded p-2 py-1 border-gray-700"
          >
            <IconBroadcast className="mr-1" />
            <span>follow</span>
          </button>
        )}
        <div>
          {user.skills?.map((skill) => (
            <div className="px-2 py-1 rounded border">{skill.label}</div>
          ))}
        </div>
        <div>
          {user.skillSets.map((skillSet) => (
            <Badge className="mr-2">{skillSet.label}</Badge>
          ))}
        </div>
      </nav>
    </>
  )
}

export default User
