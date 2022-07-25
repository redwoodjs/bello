import { render } from '@redwoodjs/testing/web'

import EmptyLayout from './EmptyLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EmptyLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmptyLayout />)
    }).not.toThrow()
  })
})
