import { IdeaStatus } from 'types/graphql'
import { IconAffiliate, IconLifebuoy, IconSquareCheck } from '@tabler/icons'
import { Tooltip } from '@mantine/core'

const StatusIcons: Record<IdeaStatus, React.FC<{ className: string }>> = {
  help: IconLifebuoy,
  progress: IconAffiliate,
  done: IconSquareCheck,
}

enum StatusClasses {
  help = 'text-red-700',
  progress = 'text-green-600',
  done = 'text-gray-400',
}

interface StatusIconProps {
  status: IdeaStatus
  className?: string
}

const StatusIcon: React.FC<StatusIconProps> = ({ status, className = '' }) => {
  const El = React.useMemo(() => StatusIcons[status], [status])

  return (
    <Tooltip label={`Status: ${status}`}>
      <div className={className}>
        <El className={StatusClasses[status]} />
      </div>
    </Tooltip>
  )
}

export default StatusIcon
