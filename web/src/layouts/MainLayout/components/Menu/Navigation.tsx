import { routes, Link, useLocation } from '@redwoodjs/router'
import classNames from 'classnames'

const Navigation = ({ location, links }) => (
  <nav className="flex flex-row items-baseline">
    <span className="text-2xl font-bold font-serif mr-4">Bello</span>
    <ul className="flex flex-row">
      {links.map((link) => (
        <li key={`Navigation - ${link.title}`}>
          <Link
            to={link.to}
            className={classNames({
              'underline font-bold': link.to === location.pathname,
            })}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default function () {
  const location = useLocation()

  const links = [
    { to: routes.topics(), title: 'Topics of Interest' },
    { to: '', title: 'Partners & Startups' },
    { to: routes.members(), title: 'Community' },
  ]

  return <Navigation location={location} links={links} />
}
