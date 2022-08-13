import { render } from '@redwoodjs/testing/web'

import StatusIcon from './StatusIcon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StatusIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StatusIcon />)
    }).not.toThrow()
  })
})
