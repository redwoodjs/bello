import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'



const SkillSetForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    props.onSave(data, props?.skillSet?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="label"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Label
        </Label>
        
          <TextField
            name="label"
            defaultValue={props.skillSet?.label}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="label" className="rw-field-error" />

        <Label
          name="ideaId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Idea id
        </Label>
        
          <NumberField
            name="ideaId"
            defaultValue={props.skillSet?.ideaId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="ideaId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SkillSetForm
