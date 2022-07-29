import { render } from '@redwoodjs/testing/web'

import Divider from './Divider'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Divider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Divider />)
    }).not.toThrow()
  })
})
