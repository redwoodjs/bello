import { IdeaStatus } from 'types/graphql'
import { RecoilState, useRecoilState } from 'recoil'
import { IconLifebuoy } from '@tabler/icons'

const StatusIcons: Record<IdeaStatus, React.FC> = {
  help: IconLifebuoy,
  progress: IconLifebuoy,
  done: IconLifebuoy,
}

interface StatusButtonProps {
  node: RecoilState<{ status: IdeaStatus }>
}

const StatusButton: React.FC<StatusButtonProps> = ({ node }) => {
  const [state, setState] = useRecoilState(node)

  return <button type="button">{StatusIcons[state.status]}</button>
}

export default StatusButton
