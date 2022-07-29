import { routes, Link, useLocation } from '@redwoodjs/router'
import classNames from 'classnames'
import Pine from 'src/components/Icons/Pine'

const Navigation = ({ location, links }) => (
  <nav className="flex flex-row items-baseline">
    <Link
      to={routes.homepage()}
      className="text-2xl font-bold font-serif mr-4 flex flex-row justify-center items-center"
    >
      Bello <Pine className="ml-2 h-[40px] w-[40px]" />
    </Link>
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
    { to: routes.explore(), title: 'Explore' },
    { to: '', title: 'Partners & Startups' },
    { to: routes.members(), title: 'Community' },
  ]

  return <Navigation location={location} links={links} />
}
