import TopicCell from 'src/components/Topic/TopicCell'

type TopicPageProps = {
  id: number
}

const TopicPage = ({ id }: TopicPageProps) => {
  return <TopicCell id={id} />
}

export default TopicPage
