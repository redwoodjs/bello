import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
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
        name="authorId"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Author id
      </Label>

      <NumberField
        name="authorId"
        defaultValue={props.idea?.authorId}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      />

      <FieldError name="authorId" className="rw-field-error" />

      <Label
        name="title"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Title
      </Label>

      <TextField
        name="title"
        defaultValue={props.idea?.title}
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
        Problem
      </Label>

      <TextField
        name="problem"
        defaultValue={props.idea?.problem}
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
        Solution
      </Label>

      <TextField
        name="solution"
        defaultValue={props.idea?.solution}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
      />

      <FieldError name="solution" className="rw-field-error" />

      <Label
        name="chat"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Chat
      </Label>

      <TextField
        name="chat"
        defaultValue={props.idea?.chat}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
      />

      <FieldError name="chat" className="rw-field-error" />

      <Label
        name="conversation"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Conversation
      </Label>

      <TextField
        name="conversation"
        defaultValue={props.idea?.conversation}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
      />

      <FieldError name="conversation" className="rw-field-error" />

      <Label
        name="main"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Main
      </Label>

      <TextField
        name="main"
        defaultValue={props.idea?.main}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
      />

      <FieldError name="main" className="rw-field-error" />

      <Label
        name="specs"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Specs
      </Label>

      <TextField
        name="specs"
        defaultValue={props.idea?.specs}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
      />

      <FieldError name="specs" className="rw-field-error" />

      <Label
        name="captainId"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Captain id
      </Label>

      <NumberField
        name="captainId"
        defaultValue={props.idea?.captainId}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
      />

      <FieldError name="captainId" className="rw-field-error" />

      <div className="rw-button-group">
        <Submit disabled={props.loading} className="rw-button rw-button-blue">
          Save
        </Submit>
      </div>
    </Form>
  )
}

export default IdeaForm
