import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ActiveTopicsCell from './components/cells/ActiveTopicsCell'
import LatestCell from './components/cells/LatestCell'

const ExplorePage = () => {
  return (
    <>
      <MetaTags title="Explore" description="Explore page" />

      <ActiveTopicsCell />
      <LatestCell />
    </>
  )
}

export default ExplorePage
