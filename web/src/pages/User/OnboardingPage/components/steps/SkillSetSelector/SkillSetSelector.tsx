import { Controller } from '@redwoodjs/forms'
import classNames from 'classnames'
import { FindSkillSets } from 'types/graphql'

export interface SkillSetSelectorProps {
  name: string
  skillSets?: FindSkillSets['skillSets']
  multiple?: boolean
}

const SelectOne = (onChange, value: number, skillId: number) => {
  onChange(value !== skillId ? skillId : value)
}

const SelectMany = (onChange, value: number[], skillId: number) => {
  let values = [...value]

  if (value.includes(skillId)) {
    values.splice(values.indexOf(skillId), 1)
  } else {
    values = [...values, skillId]
  }

  onChange(values)
}

const SkillSetSelector: React.FC<SkillSetSelectorProps> = ({
  skillSets,
  name,
  multiple = false,
}) => (
  <Controller
    name={name}
    rules={{ required: true }}
    defaultValue={multiple ? [] : undefined}
    render={({ field }) => (
      <div className="flex flex-row flex-wrap mt-2">
        {skillSets.map((s) => (
          <button
            key={`${name} - ${s.label}`}
            className={classNames(
              'text-gray-300 py-1 px-2 mr-2 mb-2 rounded border-[1px] border-gray-300',
              {
                'bg-black text-white font-bold':
                  !multiple && field.value === s.id,

                'text-black': multiple && field.value.includes(s.id),
              }
            )}
            type="button"
            onClick={() => {
              multiple
                ? SelectMany(field.onChange, field.value, s.id)
                : SelectOne(field.onChange, field.value, s.id)
            }}
          >
            {s.label}
          </button>
        ))}
      </div>
    )}
  />
)

export default SkillSetSelector
