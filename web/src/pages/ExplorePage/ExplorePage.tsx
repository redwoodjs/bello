import { MetaTags } from '@redwoodjs/web'
import Catalog from './components/Catalog/Catalog'
import ActiveTopicsCell from './components/cells/ActiveTopicsCell'
import LatestCell from './components/cells/LatestCell'

const ExplorePage = () => {
  return (
    <>
      <MetaTags title="Explore" description="Explore page" />

      <LatestCell />
      <Catalog />
      <ActiveTopicsCell />
    </>
  )
}

export default ExplorePage
