import { MultiSelect, Select } from '@mantine/core'
import IdeasCell from 'src/components/Idea/IdeasCell'
import { SortOn } from '.'
import useCatalog from './useCatalog'

const Catalog = () => {
  const { facets, search, onSortChange, onTopicChange, process } = useCatalog()

  return (
    <section className="mt-6">
      <header className="sticky top-0 py-4 bg-white z-50">
        <h1>Catalog</h1>
        <nav className="grid grid-cols-2 gap-4">
          <MultiSelect
            data={facets.topics.map(({ id, label }) => ({
              value: `${id}`,
              label,
            }))}
            label="Topics"
            value={facets.topics
              .filter(({ active }) => active)
              .map((topic) => `${topic.id}`)}
            placeholder="Filter one too many!"
            onChange={onTopicChange}
          />
          <Select
            label="Sort by"
            value={search.sort}
            data={Object.values(SortOn)}
            onChange={onSortChange}
          />
        </nav>
      </header>
      <IdeasCell process={process} />
    </section>
  )
}

export default Catalog
