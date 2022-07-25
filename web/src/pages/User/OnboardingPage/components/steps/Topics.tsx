import { Controller, FieldError, Form, Label } from '@redwoodjs/forms'
import classNames from 'classnames'
import TopicsCell from 'src/components/Topic/TopicsCell'

const TopicsSelector = ({ topics }) => (
  <Controller
    name="topics"
    defaultValue={[]}
    rules={{ required: true }}
    render={({ field }) => (
      <div className="flex flex-row flex-wrap mt-2">
        {topics.map((t) => (
          <button
            key={`Topic - ${t.label}`}
            type="button"
            onClick={() => {
              let values = [...field.value]

              if (field.value.includes(t.id)) {
                values.splice(values.indexOf(t.id), 1)
              } else {
                values = [...values, t.id]
              }

              field.onChange(values)
            }}
            className={classNames(
              'text-gray-300 py-1 px-2 mr-2 mb-2 rounded border-[1px] border-gray-300',
              {
                'bg-black text-white': field.value.includes(t.id),
              }
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
    )}
  />
)

const Topics = ({ save }) => (
  <Form onSubmit={save}>
    <h1 className="font-serif text-6xl">Lastly, your interests!</h1>
    <div className=" my-4">
      <div className="flex flex-col">
        <Label name="strength">
          Those will help us match some quality content for you
        </Label>
        <TopicsCell
          Component={TopicsSelector}
          componentProps={{ name: 'strength' }}
        />
        <FieldError name="strength" className="error-message" />
      </div>
    </div>
    <div className="flex justify-end">
      <button className="underline font-serif" type="submit">
        Done!
      </button>
    </div>
  </Form>
)

export default Topics
