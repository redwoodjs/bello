import IdeaCard, { Variant } from 'src/components/IdeaCard/IdeaCard'

const IdeasList = ({ ideas }) => (
  <>
    {ideas && (
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {ideas.map((idea) => (
          <IdeaCard
            key={`Ideas - #${idea.id} - ${idea.title}`}
            variant={Variant.standard}
            idea={idea}
          />
        ))}
      </section>
    )}
  </>
)

export default IdeasList
