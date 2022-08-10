import { render } from '@redwoodjs/testing/web'

import VoteBar from './VoteBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Vote', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VoteBar />)
    }).not.toThrow()
  })
})
