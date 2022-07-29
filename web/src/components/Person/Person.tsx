import { Link, routes } from '@redwoodjs/router'
import Face from 'src/components/Face/Face'

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

const Person = ({
  id,
  firstname,
  lastname,
  role,
  capacity,
  avatar,
  variant = Variant.landscape,
}) => (
  <Link to={routes.user({ id })} className="h-fit">
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
        <p className="leading-3 text-xs text-gray-600">{'@capacity'}</p>
      </div>
    </div>
  </Link>
)

export default Person
