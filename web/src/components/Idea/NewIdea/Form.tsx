import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
  InputField,
  Controller,
  useFieldArray,
  useFormState,
} from '@redwoodjs/forms'

import TopicsCell from 'src/components/Topic/TopicsCell'
import {
  Box,
  Button,
  Grid,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'

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

      <Label
        name="topics"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Please list the topics concerned:
      </Label>

      <InputField
        name="topics"
        placeholder="What is it about? Be concise and precise"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      />
      <Text color="gray" fontSize={12}>
        This will help the community find and identify your proposal.
      </Text>
      <FieldError name="topics" className="rw-field-error" />

      <div className="rw-button-group">
        <Submit disabled={props.loading} className="rw-button rw-button-blue">
          Send
        </Submit>
      </div>
    </Form>
  )
}

const SelectTopics = () => {
  const { append, remove, fields } = useFieldArray({
    name: 'topics',
    rules: {
      required: {
        message:
          'Topics are needed to help the crowd find out about your proposal',
        value: true,
      },
    },
  })

  const { errors } = useFormState()
  console.log(errors)

  return (
    <>
      <Label
        name="topics"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Select the topics we should search to find your proposal:
      </Label>
      <TopicsCell
        Component={({ topics = [] }) => (
          <Menu>
            {!fields.length && (
              <MenuButton
                w="full"
                as={Button}
                border="1px solid"
                borderColor="vapor"
                borderRadius={8}
                p={2}
              >
                Please select topics
              </MenuButton>
            )}
            {fields.length > 0 && (
              <HStack justifyContent="space-between">
                <HStack
                  w="full"
                  as={Box}
                  border="1px solid"
                  borderColor="vapor"
                  borderRadius={8}
                  p={2}
                >
                  {topics
                    .filter(
                      ({ id }) =>
                        fields.filter((field) => field.dbId === `${id}`).length
                    )
                    .map(({ id, label }) => (
                      <Button
                        key={`Selected topics - ${label}`}
                        border="1px solid"
                        fontSize={10}
                        borderColor="vapor"
                        borderRadius={4}
                        p={1}
                        mr={2}
                        onClick={(ev) => {
                          remove({ dbId: `${id}` })
                        }}
                      >
                        {label}
                      </Button>
                    ))}
                </HStack>
                <MenuButton
                  as={Box}
                  border="1px solid"
                  borderColor="vapor"
                  borderRadius={8}
                  p={1.5}
                >
                  more
                </MenuButton>
              </HStack>
            )}
            <MenuList
              w="full"
              border="1px solid"
              borderColor="vapor"
              bgColor="white"
              borderRadius={8}
            >
              {topics.slice(0, 5).map(({ id, label }) => (
                <MenuItem
                  p={2}
                  key={`Topics - ${label}`}
                  onClick={() => {
                    fields.includes(id)
                      ? remove({ dbId: `${id}` })
                      : append({ dbId: `${id}` })
                  }}
                >
                  {id} {label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        )}
      />
      <FieldError name="topics.root" className="rw-field-error" />
    </>
  )
}

export default IdeaForm
