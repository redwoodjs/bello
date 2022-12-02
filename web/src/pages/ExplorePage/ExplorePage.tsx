import { MetaTags } from '@redwoodjs/web'
import Catalog from './components/Catalog/Catalog'
import ActiveTopicsCell from './components/cells/ActiveTopicsCell'
import LatestCell from './components/cells/LatestCell'

const ExplorePage = () => {
  return (
    <>
      <MetaTags title="Explore" description="Explore page" />

      <section className="w-full flex flex-col justify-center items-center mt-12">
        <h1 className="text-4xl font-serif">
          <span className="font-bold">Fresh</span> from the top of our heads
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-12">
          <LatestCell />
        </div>
      </section>
      <Catalog />
      <section className="w-full flex flex-col justify-center items-center mt-10">
        <h1 className="text-4xl font-serif">Active topics lately</h1>
        <div className="grid grid-cols-3 gap-4 mt-8 w-full">
          <ActiveTopicsCell />
        </div>
      </section>
    </>
  )
}

export default ExplorePage
