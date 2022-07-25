import { FieldError, Form, InputField, Label, useForm } from '@redwoodjs/forms'

const Identity = ({ next, save }) => (
  <Form onSubmit={save}>
    <h1 className="font-serif text-6xl">First, some introduction</h1>
    <div className="grid grid-rows-3 gap-4 my-4">
      <div className="flex flex-col">
        <Label name="firstname">Firstname</Label>
        <InputField required={true} name="firstname" placeholder="Firstname" />
        <FieldError name="firstname" className="error-message" />
      </div>
      <div className="flex flex-col">
        <Label name="lastname">Lastname</Label>
        <InputField required={true} name="lastname" placeholder="Lastname" />
        <FieldError name="lastname" className="error-message" />
      </div>
      <div className="flex flex-col">
        <Label name="username">Nickname</Label>
        <InputField required={true} name="username" placeholder="Nickname" />
        <FieldError name="username" className="error-message" />
      </div>
    </div>
    <div className="flex justify-end">
      <button className="underline font-serif" type="submit">
        Continue
      </button>
    </div>
  </Form>
)

export default Identity
