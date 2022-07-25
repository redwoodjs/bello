import SkillCell from 'src/components/Skill/SkillCell'

type SkillPageProps = {
  id: number
}

const SkillPage = ({ id }: SkillPageProps) => {
  return <SkillCell id={id} />
}

export default SkillPage
