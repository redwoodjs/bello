import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const User = () => {
  const { currentUser, isAuthenticated, logOut } = useAuth()

  return (
    <ul>
      {!isAuthenticated && (
        <li>
          <Link to={routes.login()}>Sign In</Link>
        </li>
      )}
      {isAuthenticated && (
        <>
          <li>
            <Link to={routes.dashboard()}>Dashboard</Link>
          </li>
          <li>
            <Link to={routes.editUser({ id: currentUser?.id })}>You</Link>
          </li>
          <li>
            <Link to="#" onClick={logOut}>
              Log out
            </Link>
          </li>
        </>
      )}
    </ul>
  )
}

export default User
