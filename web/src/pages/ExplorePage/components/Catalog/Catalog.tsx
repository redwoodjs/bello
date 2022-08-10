import { Group, Text, MultiSelect, Select } from '@mantine/core'
import IdeasCell from 'src/components/Idea/IdeasCell'
import useCatalog from './useCatalog'
import { IconThumbUp, IconThumbDown } from '@tabler/icons'
import Pine from 'src/components/Icons/Pine'

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
            itemComponent={SelectItem}
            data={[
              {
                label: 'Champions',
                value: 'champion',
                description:
                  'Find out the ideas supported by the Core Team - we need you here!',
                image: <Pine />,
              },
              { label: 'Upvotes', image: <IconThumbUp />, value: 'upvote' },
              {
                label: 'Downvotes',
                image: <IconThumbDown />,
                value: 'downvote',
              },
            ]}
            onChange={onSortChange}
          />
        </nav>
      </header>
      <IdeasCell process={process} />
    </section>
  )
}

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string
  label: string
  description: string
}

const SelectItem = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        {image}
        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
)

export default Catalog
