import { ButtonField } from '@redwoodjs/forms'

const Selector = ({ skillSets, onClick }) => (
  <div className="flex flex-row flex-wrap">
    {skillSets.map((skillSet) => (
      <button>skillSet</button>
    ))}
  </div>
)

export default Selector
