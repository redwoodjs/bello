import useProcess from '../useProcess'

const Welcome = ({ next }) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-serif text-6xl">Welcome!</h1>
      <p className="font-serif mt-6 text-3xl">
        Let's have a chat before we can meet the community
      </p>
      <div className="flex flex-row justify-end">
        <a href="#" className="mt-6 font-serif underline" onClick={next}>
          Continue
        </a>
      </div>
    </div>
  )
}

export default Welcome
