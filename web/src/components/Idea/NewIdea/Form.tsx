import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  SelectField,
  TextField,
  TextAreaField,
  Submit,
  Controller,
} from '@redwoodjs/forms'
import { MultiSelect, TextInput } from '@mantine/core'

import TopicsCell from 'src/components/Topic/TopicsCell'

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
        Title
      </Label>

      <TextField
        name="title"
        defaultValue={props.idea?.title}
        placeholder="What is it about? Be concise and precise"
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
        Core issue
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
        Solution lead(s) (optional):
      </Label>

      <TextAreaField
        name="solution"
        defaultValue={props.idea?.solution}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
      />

      <FieldError name="solution" className="rw-field-error" />

      <Controller
        name="topics"
        render={({ field }) => (
          <>
            <Label
              name="topics"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Select the topics we should search to find your proposal:
            </Label>
            <TopicsCell
              Component={({ topics }) => (
                <MultiSelect
                  className="rw-input border-none p-0"
                  {...field}
                  value={field?.value?.map((v) => `${v}`) ?? []}
                  data={topics.map(({ id, label }) => ({
                    value: `${id}`,
                    label,
                  }))}
                />
              )}
            />
            <FieldError name="topics" className="rw-field-error" />
          </>
        )}
      />

      <div className="rw-button-group">
        <Submit disabled={props.loading} className="rw-button rw-button-blue">
          Send
        </Submit>
      </div>
    </Form>
  )
}

export default IdeaForm
