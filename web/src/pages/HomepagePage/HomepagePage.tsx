import { useAuth } from '@redwoodjs/auth'
import { Form, InputField, PasswordField } from '@redwoodjs/forms'
import { Link, routes, useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import TopicsCell from 'src/components/Topic/TopicsCell'
import Header from 'src/layouts/MainLayout/components/Header'
import Footer from 'src/layouts/MainLayout/components/Footer'
import Divider from 'src/components/Divider/Divider'

const GithubSignIn = () => {
  const params = useParams()

  React.useEffect(() => {}, [params.code])

  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`}
    >
      sign in
    </a>
  )
}

enum SignMode {
  signIn = 'signIn',
  signUp = 'signUp',
}

const Sign = () => {
  const { logIn, signUp, isAuthenticated } = useAuth()

  const [mode, setMode] = React.useState(SignMode.signIn)

  return (
    <>
      {!isAuthenticated &&
        (mode === SignMode.signIn ? (
          <SignIn
            onSubmit={logIn}
            onUsernameNotFound={() => {
              setMode(SignMode.signUp)
            }}
          />
        ) : (
          <SignUp onSubmit={signUp} />
        ))}
    </>
  )
}

const SignIn = ({ onUsernameNotFound, onSubmit }) => {
  return (
    <Form
      onSubmit={(data) => {
        onSubmit(data).then((e) => {
          if (e.error === `Username ${data.username} not found`) {
            onUsernameNotFound()
          }
        })
      }}
      className="flex flex-col w-full md:w-[500px] m-auto px-4 py-6 border-gray-300 border-[1px] rounded-lg"
    >
      <h1 className="font-bold text-3xl font-serif">Sign in</h1>
      <InputField className="mt-4" name="username" />
      <PasswordField className="mt-4" name="password" />
      <button className="mt-4 rounded bg-green-500 p-2 font-bold text-white">
        Sign in
      </button>
    </Form>
  )
}

const SignUp = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      className="flex flex-col w-full md:w-[500px] m-auto px-4 py-6 border-gray-300 border-[1px] rounded-lg"
    >
      <h1 className="font-bold text-3xl font-serif">Sign Up</h1>
      <p>
        It appears we couldn't find your user, so instead we could sign you up:
      </p>
      <InputField className="mt-4" name="username" />
      <PasswordField className="mt-4" name="password" />
      <button className="mt-4 rounded bg-green-500 p-2 font-bold text-white">
        Sign up
      </button>
    </Form>
  )
}

const HomepagePage = () => {
  return (
    <>
      <MetaTags title="Homepage" description="Homepage page" />
      <Header />
      <header className="my-20 flex flex-col">
        <p className="font-serif ml-4 lg:ml-[33%]  text-3xl">
          Welcome to <span className="font-bold">Bello</span>
        </p>
        <h1 className="font-serif  m-auto">
          <span className="font-bold">Innovation</span> made possible
          <br />
          through our Community&apos;s <span className="font-bold">Ideas</span>.
        </h1>
      </header>
      <section className="flex lg:flex-row bg-[#245E60] justify-around text-white py-6">
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12 ">
          <div className="flex flex-col justify-center">
            <p>
              We are working on a <span className="italic">lot</span> of{' '}
              <span className="font-bold">Topics</span>
            </p>
          </div>
          <TopicsCell
            Component={({ topics }) => (
              <>
                {topics.slice(0, 8).map((topic) => (
                  <div className=" rounded border-white border p-2">
                    <p className="">{topic.label}</p>
                    <p className="text-sm">{topic.description}</p>
                  </div>
                ))}
              </>
            )}
          />
          <Link className="underline" to={routes.explore()}>
            Explore the rest of them
          </Link>
        </div>
      </section>
      <Divider />
      <section className="flex justify-center flex-col">
        <div className="m-auto">
          <h2 className="text-4xl font-serif">
            But here's what's <span className="font-bold">happening</span> in{' '}
            <span className="italic">real-time</span>
          </h2>
          <span className="text-gray-400 ml-20">
            our current delivery cycle
          </span>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default HomepagePage
