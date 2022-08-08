import { render } from '@redwoodjs/testing/web'

import Vote from './Vote'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Vote', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Vote />)
    }).not.toThrow()
  })
})
