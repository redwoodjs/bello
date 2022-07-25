import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'



const MemberForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.member?.id)
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
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        
          <NumberField
            name="userId"
            defaultValue={props.member?.userId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        
          <TextField
            name="title"
            defaultValue={props.member?.title}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        
          <TextField
            name="description"
            defaultValue={props.member?.description}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="linkedin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Linkedin
        </Label>
        
          <TextField
            name="linkedin"
            defaultValue={props.member?.linkedin}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="linkedin" className="rw-field-error" />

        <Label
          name="discord"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Discord
        </Label>
        
          <TextField
            name="discord"
            defaultValue={props.member?.discord}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="discord" className="rw-field-error" />

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

export default MemberForm
