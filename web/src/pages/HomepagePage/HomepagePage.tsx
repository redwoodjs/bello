import { useAuth } from '@redwoodjs/auth'
import { Form, InputField, PasswordField } from '@redwoodjs/forms'
import { Link, routes, useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

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
      <div className="flex flex-col justify-center h-full">
        <Sign />
      </div>
    </>
  )
}

export default HomepagePage
