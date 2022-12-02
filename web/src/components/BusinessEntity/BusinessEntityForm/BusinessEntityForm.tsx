import {
  Form,
  FormError,
  FieldError,
  Label,
  RadioField,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditBusinessEntityById, UpdateBusinessEntityInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormBusinessEntity = NonNullable<EditBusinessEntityById['businessEntity']>

interface BusinessEntityFormProps {
  businessEntity?: EditBusinessEntityById['businessEntity']
  onSave: (data: UpdateBusinessEntityInput, id?: FormBusinessEntity['id']) => void
  error: RWGqlError
  loading: boolean
}

const BusinessEntityForm = (props: BusinessEntityFormProps) => {
  const onSubmit = (data: FormBusinessEntity) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.businessEntity?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBusinessEntity> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>
        
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="businessEntity-type-0"
            name="type"
            defaultValue="partner"
            defaultChecked={props.businessEntity?.type?.includes('partner')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Partner
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="businessEntity-type-1"
            name="type"
            defaultValue="startup"
            defaultChecked={props.businessEntity?.type?.includes('startup')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Startup
          </div>
        </div>
          
        

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="label"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Label
        </Label>
        
          <TextField
            name="label"
            defaultValue={props.businessEntity?.label}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="label" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        
          <TextField
            name="description"
            defaultValue={props.businessEntity?.description}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>
        
          <TextField
            name="url"
            defaultValue={props.businessEntity?.url}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="adminId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Admin id
        </Label>
        
          <NumberField
            name="adminId"
            defaultValue={props.businessEntity?.adminId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="adminId" className="rw-field-error" />

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

export default BusinessEntityForm
