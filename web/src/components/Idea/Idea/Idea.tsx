import { Badge } from '@mantine/core'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { IconEdit, IconSquareX } from '@tabler/icons'
import Person from 'src/components/Person/Person'
import StatusIcon from 'src/components/StatusIcon/StatusIcon'
import VoteBar from 'src/components/VoteBar/VoteBar'
import Tabs from './components/Tabs/Tabs'

const DELETE_IDEA_MUTATION = gql`
  mutation DeleteIdeaMutation($id: Int!) {
    deleteIdea(id: $id) {
      id
    }
  }
`

const Idea = ({ idea }) => {
  const [deleteIdea] = useMutation(DELETE_IDEA_MUTATION, {
    onCompleted: () => {
      toast.success('Idea deleted')
      navigate(routes.ideas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete idea ' + id + '?')) {
      deleteIdea({ variables: { id } })
    }
  }

  return (
    <div className="w-full lg:w-2/3 lg:m-auto">
      <section className="flex flex-col md:flex-row mt-12">
        <article className="w-full md:w-1/2">
          <header className="">
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-col">
                <h1 className="text-xl font-sans flex flex-row items-center">
                  <StatusIcon status={idea.status} className="mr-1" />
                  {idea.title}
                </h1>
                <p className="text-xs font-sans">target:static</p>
              </div>
              {idea.canEdit && (
                <nav className="rw-button-group">
                  <Link
                    to={routes.editIdea({ id: idea.id })}
                    className="text-gray-500"
                  >
                    <IconEdit />
                  </Link>
                  <button
                    type="button"
                    className="ml-2 text-red-500"
                    onClick={() => onDeleteClick(idea.id)}
                  >
                    <IconSquareX />
                  </button>
                </nav>
              )}
            </div>
            <div className="flex flex-row flex-wrap mt-2">
              {idea.topics.map((topic) => (
                <Badge key={`Idea #${idea.id} - topics - #${topic.id}`}>
                  {topic?.label}
                </Badge>
              ))}
            </div>
          </header>
          <p className="mt-4 text-justify">{idea.problem}</p>
          <VoteBar
            ideaId={idea.id}
            count={idea.count}
            userVote={idea.userVote}
            className="mt-4"
          />
        </article>
        <aside className="w-full md:w-1/2 mt-4 md:mt-0  flex justify-end">
          <div className="flex flex-col items-stretch">
            <Person {...idea.author} capacity="author" className="" />
            {idea?.captain && <Person {...idea.captain} capacity="captain" />}
            {idea.champions?.map((champion) => (
              <Person {...champion} capacity="champion" className="" />
            ))}
          </div>
        </aside>
      </section>
      <Tabs idea={idea} />
    </div>
  )
}

export default Idea
