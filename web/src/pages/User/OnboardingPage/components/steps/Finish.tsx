const Finish = ({ finish }) => (
  <div className="flex flex-col">
    <h1 className="font-serif text-6xl">Thank you!</h1>
    <p className="font-serif mt-6 text-lg">
      All your settings can be updated through your profile page.
      <br />
      <br /> We just collected a few informations to get your started, but of
      course you may want to add more details about you. You are welcome to do
      so! This will help us even more matching the right content for you and
      making sure you always know where you can go next.
      <br />
      <br /> By the way, the first place you should go to check out what&apos;s
      happening is -
    </p>
    <div className="flex flex-row justify-end">
      <a
        href="#"
        className="mt-6 px-4 py-2 font-sans rounded border-[1px] border-gray-900"
        onClick={finish}
      >
        -&rarr; Your dashboard
      </a>
    </div>
  </div>
)

export default Finish
