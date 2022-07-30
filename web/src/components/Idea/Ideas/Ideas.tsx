import IdeaCard from 'src/components/IdeaCard/IdeaCard'

const IdeasList = ({ ideas }) => {
  return (
    <>
      {ideas && (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {ideas.map((idea) => (
            <IdeaCard key={`Ideas - ${idea.title}`} idea={idea} />
          ))}
        </section>
      )}
    </>
  )
}

export default IdeasList
