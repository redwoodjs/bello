import EditIdeaCell from 'src/components/Idea/EditIdeaCell'

type IdeaPageProps = {
  id: number
}

const EditIdeaPage = ({ id }: IdeaPageProps) => {
  return <EditIdeaCell id={id} />
}

export default EditIdeaPage
