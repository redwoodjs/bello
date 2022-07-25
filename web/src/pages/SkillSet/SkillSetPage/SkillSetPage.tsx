import SkillSetCell from 'src/components/SkillSet/SkillSetCell'

type SkillSetPageProps = {
  id: number
}

const SkillSetPage = ({ id }: SkillSetPageProps) => {
  return <SkillSetCell id={id} />
}

export default SkillSetPage
