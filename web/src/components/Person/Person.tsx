import { Link, routes } from '@redwoodjs/router'
import Face, { Capacity, FaceProps } from 'src/components/Face/Face'
import { User } from 'types/graphql'

export enum Variant {
  portrait = 'portrait',
  landscape = 'landscape',
}

type Classes = {
  container: string
  infos?: string
}

const style: Record<Variant, Classes> = {
  [Variant.landscape]: {
    container: 'flex flex-row items-center',
    infos: 'flex flex-col pl-2',
  },
  [Variant.portrait]: {
    container: 'flex flex-col items-center',
    infos: 'flex flex-col items-center',
  },
}

interface PersonProps extends Pick<FaceProps, 'capacity'>, User {
  variant: Variant
  className?: string
}

const Person: React.FC<PersonProps> = ({
  id,
  firstname,
  lastname,
  role,
  capacity,
  avatar,
  className = '',
  variant = Variant.landscape,
}) => (
  <Link to={routes.user({ id })} className={`h-fit ${className}`}>
    <div className={style[variant].container}>
      <Face
        capacity={variant === Variant.landscape ? capacity : undefined}
        avatar={avatar}
        role={variant === Variant.landscape ? role : undefined}
      />
      <div className={style[variant].infos}>
        <p className="font-bold text-sm">
          {firstname} {lastname}
        </p>
        <p className="leading-3 text-xs text-gray-600">
          {capacity && `@${capacity}`}
        </p>
      </div>
    </div>
  </Link>
)

export default Person
