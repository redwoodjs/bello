import { Badge, MultiSelect } from '@mantine/core'
import { atom, useRecoilState } from 'recoil'
import IdeasCell from 'src/components/Idea/IdeasCell'
import { Topic } from 'types/graphql'

interface Facets {
  topics: Array<Pick<Topic, 'id' | 'label'> & { active: boolean }>
  sort: { champion: boolean }
}

export const node = atom<Facets>({
  key: 'Catalog',
  default: { topics: [], sort: { champion: false } },
})

const Catalog = () => {
  const [state, setState] = useRecoilState(node)

  const activeTopics = React.useMemo(
    () => state.topics.filter(({ active }) => active),
    [state.topics]
  )

  const onTopicChange = React.useCallback(
    (select) => {
      setState((facets) => ({
        ...facets,
        topics: facets?.topics?.map((topic) => ({
          ...topic,
          active: select.includes(`${topic.id}`) ?? false,
        })),
      }))
    },
    [state, setState]
  )

  const filter = React.useCallback(
    (idea) => {
      if (state.topics.filter(({ active }) => active).length) {
        return idea.topics.some(({ id }) =>
          activeTopics.map(({ id }) => id).includes(id)
        )
      } else {
        return true
      }
    },
    [state]
  )

  return (
    <section className="mt-6">
      <header className="sticky top-0 py-4 bg-white z-50">
        <h1>Catalog</h1>
        <nav>
          <MultiSelect
            data={state.topics.map(({ id, label }) => ({
              value: `${id}`,
              label,
            }))}
            label="Topics"
            value={state.topics
              .filter(({ active }) => active)
              .map((topic) => `${topic.id}`)}
            placeholder="Filter one too many!"
            onChange={onTopicChange}
          />
        </nav>
      </header>
      <IdeasCell filter={filter} />
    </section>
  )
}

export default Catalog
