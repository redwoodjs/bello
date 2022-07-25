import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <header className="flex flex-row justify-between">
        <h1 className="text-6xl font-serif w-96">
          Hi! <br /> Here’s a digest of where you can help
        </h1>
        <section className="flex flex-col justify-center">
          <Link
            to={routes.newIdea()}
            className=" px-4 py-2 border rounded bg-amber-500 font-bold text-white"
          >
            I have an Idea
          </Link>
        </section>
      </header>
    </>
  )
}

export default DashboardPage
