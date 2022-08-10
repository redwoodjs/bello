import { useRecoilState } from 'recoil'
import { Idea } from 'types/graphql'
import { FacetsStore, SelectTopic, SortOn } from '.'
import node from './node'

export interface UseCatalogReturn {
  facets: FacetsStore
  process: (ideas: Idea[]) => Idea[]
  onSortChange: (select: string) => void
  onTopicChange: (select: string[]) => void
  search: { sort: SortOn; topics: SelectTopic[] }
}

interface UseCatalog {
  (): UseCatalogReturn
}

export default <UseCatalog>function useCatalog() {
  const [facets, setState] = useRecoilState(node)

  /**
   * OnChange events
   */
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
    [facets, setState]
  )

  const onSortChange = React.useCallback(
    (select) => {
      setState((facets) => ({
        ...facets,
        sort: Object.fromEntries(
          Object.entries(facets.sort).map(([field]) => [
            field,
            field === select,
          ])
        ) as Record<SortOn, boolean>,
      }))
    },
    [facets, setState]
  )

  /**
   * Facets value
   */
  const activeTopics = React.useMemo(
    () => facets.topics.filter(({ active }) => active),
    [facets.topics]
  )

  const activeSort = React.useMemo(
    () =>
      Object.entries(facets.sort)
        .filter(([_field, value]) => value)
        ?.shift()
        ?.shift(),
    [facets.sort]
  )

  /**
   * Processing functions to apply when facets change.
   */
  const filter = React.useCallback(
    (idea) => {
      if (facets.topics.filter(({ active }) => active).length) {
        return idea.topics.some(({ id }) =>
          activeTopics.map(({ id }) => id).includes(id)
        )
      } else {
        return true
      }
    },
    [facets, activeTopics]
  )

  const sort = React.useCallback(
    (a: Idea, b: Idea) => {
      switch (activeSort) {
        case 'upvote':
          return b.count.upvotes - a.count.upvotes
        case 'downvote':
          return b.count.downvotes - a.count.downvotes
        case 'champion':
          throw new Error('Not implemented')
      }
    },
    [activeSort]
  )

  const process = React.useCallback(
    (ideas) => ideas.filter(filter).sort(sort),
    [filter, sort]
  )

  return {
    facets,
    onTopicChange,
    onSortChange,
    process,
    search: { topics: activeTopics, sort: activeSort },
  }
}
