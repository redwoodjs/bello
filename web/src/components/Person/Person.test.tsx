import { render } from '@redwoodjs/testing/web'

import Person from './Person'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Person', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Person />)
    }).not.toThrow()
  })
})
