import IdeaCard from 'src/components/IdeaCard/IdeaCard'

export const QUERY = gql`
  query LATEST_CELL {
    ideas: latest {
      id
      createdAt
      title
      problem
      topics {
        id
        label
      }
      votes {
        id
        userId
        vote
      }
    }
  }
`

export const Success = ({ ideas }) => (
  <>
    {ideas?.length && (
      <section className="w-full flex flex-col justify-center items-center mt-12">
        <h1 className="text-4xl font-serif">Fresh from the top of our heads</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-12">
          {ideas?.map((idea) => (
            <IdeaCard key={`LatestCell - ${idea.title}`} idea={idea} />
          ))}
        </div>
      </section>
    )}
  </>
)
