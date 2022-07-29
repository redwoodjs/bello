import { render } from '@redwoodjs/testing/web'

import ExplorePage from './ExplorePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ExplorePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExplorePage />)
    }).not.toThrow()
  })
})
