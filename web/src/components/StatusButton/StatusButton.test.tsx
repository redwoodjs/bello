import { render } from '@redwoodjs/testing/web'

import StatusButton from './StatusButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StatusButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StatusButton />)
    }).not.toThrow()
  })
})
