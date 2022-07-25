import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'

const IdeaForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.idea?.id)
  }

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <FormError
        error={props.error}
        wrapperClassName="rw-form-error-wrapper"
        titleClassName="rw-form-error-title"
        listClassName="rw-form-error-list"
      />

      <Label
        name="title"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        What is it about?
      </Label>

      <TextField
        name="title"
        defaultValue={props.idea?.title}
        placeholder="Please provide an explicit title"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      />

      <FieldError name="title" className="rw-field-error" />

      <Label
        name="problem"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Tell us more about what the issue is:
      </Label>

      <TextAreaField
        name="problem"
        defaultValue={props.idea?.problem}
        placeholder="A clear explanation of what you believe is the problem to address"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      />

      <FieldError name="problem" className="rw-field-error" />

      <Label
        name="solution"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Describe a rough idea of a solution (optional):
      </Label>

      <TextAreaField
        name="solution"
        defaultValue={props.idea?.solution}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
      />

      <FieldError name="solution" className="rw-field-error" />

      <div className="rw-button-group">
        <Submit disabled={props.loading} className="rw-button rw-button-blue">
          Send
        </Submit>
      </div>
    </Form>
  )
}

export default IdeaForm
