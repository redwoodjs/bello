import { Avatar } from '@mantine/core'
import { Role } from 'types/graphql'
import { IconUserCircle } from '@tabler/icons'
import Pine, { Colors } from 'src/components/Icons/Pine'

export enum Capacity {
  author = 'author',
  champion = 'champion',
  captain = 'captain',
  contributor = 'contributor',
}

const capacities: Record<Capacity, Colors> = {
  author: Colors.blue,
  captain: Colors.blue,
  champion: Colors.red,
  contributor: Colors.teal,
}

function userCapacity(capacity: Capacity, role: Role) {
  return capacities[capacity]
}

export interface FaceProps {
  capacity: Capacity
  role: Role
}

const Face: React.FC<FaceProps> = ({ capacity, avatar, role }) => (
  <div className="relative">
    <Avatar size="lg" className="relative">
      <IconUserCircle className="w-[64px] h-[64px]" />
    </Avatar>
    {capacity !== Capacity.author && (
      <Pine
        color={userCapacity(capacity, role)}
        className="absolute z-10 bottom-0 right-0 h-[20px] w-[20px] "
      />
    )}
  </div>
)

export default Face
