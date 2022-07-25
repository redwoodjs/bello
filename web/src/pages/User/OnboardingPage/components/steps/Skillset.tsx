import {
  Controller,
  FieldError,
  Form,
  InputField,
  Label,
} from '@redwoodjs/forms'
import classNames from 'classnames'
import SkillSetsCell from 'src/components/SkillSet/SkillSetsCell'
import { FindSkillSets } from 'types/graphql'
import SkillSetSelector from './SkillSetSelector/SkillSetSelector'

const Skillset = ({ save }) => (
  <Form onSubmit={save}>
    <h1 className="font-serif text-6xl">How about your skillset</h1>
    <div className="grid grid-rows-3 gap-4 my-4">
      <div className="flex flex-col">
        <Label name="strength">What is your daily job like?</Label>
        <SkillSetsCell
          Component={SkillSetSelector}
          componentProps={{ name: 'strengthId' }}
        />
        <FieldError name="strength" className="error-message" />
      </div>
      <div className="flex flex-col">
        <Label name="strength">What are your extra skills?</Label>
        <SkillSetsCell
          Component={SkillSetSelector}
          componentProps={{ name: 'skillSets', multiple: true }}
        />
        <FieldError name="strength" className="error-message" />
      </div>
    </div>
    <div className="flex justify-end">
      <button className="underline font-serif" type="submit">
        Continue
      </button>
    </div>
  </Form>
)

export default Skillset
