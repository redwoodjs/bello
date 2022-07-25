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

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
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
          name="role"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Role
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-0"
            name="role"
            defaultValue="admin"
            defaultChecked={props.user?.role?.includes('admin')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Admin</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-1"
            name="role"
            defaultValue="coreteam"
            defaultChecked={props.user?.role?.includes('coreteam')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Coreteam</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-2"
            name="role"
            defaultValue="partner"
            defaultChecked={props.user?.role?.includes('partner')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Partner</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-3"
            name="role"
            defaultValue="startup"
            defaultChecked={props.user?.role?.includes('startup')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Startup</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-4"
            name="role"
            defaultValue="contributor"
            defaultChecked={props.user?.role?.includes('contributor')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Contributor</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-5"
            name="role"
            defaultValue="default"
            defaultChecked={props.user?.role?.includes('default')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Default</div>
        </div>

        <FieldError name="role" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="username"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          username
        </Label>

        <TextField
          name="username"
          defaultValue={props.user?.username}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="username" className="rw-field-error" />

        <Label
          name="firstname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Firstname
        </Label>

        <TextField
          name="firstname"
          defaultValue={props.user?.firstname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="firstname" className="rw-field-error" />

        <Label
          name="lastname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lastname
        </Label>

        <TextField
          name="lastname"
          defaultValue={props.user?.lastname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="lastname" className="rw-field-error" />

        <Label
          name="avatar"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Avatar
        </Label>

        <TextField
          name="avatar"
          defaultValue={props.user?.avatar}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="avatar" className="rw-field-error" />

        <Label
          name="strengthId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Strength id
        </Label>

        <NumberField
          name="strengthId"
          defaultValue={props.user?.strengthId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="strengthId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
