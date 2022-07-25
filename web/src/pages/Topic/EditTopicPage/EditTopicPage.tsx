import EditTopicCell from 'src/components/Topic/EditTopicCell'

type TopicPageProps = {
  id: number
}

const EditTopicPage = ({ id }: TopicPageProps) => {
  return <EditTopicCell id={id} />
}

export default EditTopicPage
