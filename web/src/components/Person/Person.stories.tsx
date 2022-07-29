import Person, { Variant } from './Person'

const props = { id: 0, firstname: 'Lucas', lastname: 'Jones' }

export const Default = (props) => {
  return <Person {...props} />
}

Default.args = props

export const Portrait = (props) => {
  return <Person {...props} variant={Variant.portrait} />
}

Portrait.args = props

export default { title: 'Components/Person' }
