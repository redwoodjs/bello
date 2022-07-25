import EditSkillSetCell from 'src/components/SkillSet/EditSkillSetCell'

type SkillSetPageProps = {
  id: number
}

const EditSkillSetPage = ({ id }: SkillSetPageProps) => {
  return <EditSkillSetCell id={id} />
}

export default EditSkillSetPage
