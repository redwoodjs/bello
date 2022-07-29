import { render } from '@redwoodjs/testing/web'

import Face from './Face'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Face', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Face />)
    }).not.toThrow()
  })
})
