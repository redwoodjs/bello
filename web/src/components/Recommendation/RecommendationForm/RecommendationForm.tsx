import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditRecommendationById, UpdateRecommendationInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormRecommendation = NonNullable<EditRecommendationById['recommendation']>

interface RecommendationFormProps {
  recommendation?: EditRecommendationById['recommendation']
  onSave: (data: UpdateRecommendationInput, id?: FormRecommendation['id']) => void
  error: RWGqlError
  loading: boolean
}

const RecommendationForm = (props: RecommendationFormProps) => {
  const onSubmit = (data: FormRecommendation) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.recommendation?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormRecommendation> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="businessEntityId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Business entity id
        </Label>
        
          <NumberField
            name="businessEntityId"
            defaultValue={props.recommendation?.businessEntityId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="businessEntityId" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        
          <NumberField
            name="userId"
            defaultValue={props.recommendation?.userId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="text"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Text
        </Label>
        
          <TextField
            name="text"
            defaultValue={props.recommendation?.text}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="text" className="rw-field-error" />

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

export default RecommendationForm
