import { render } from '@redwoodjs/testing/web'

import IdeaCard from './IdeaCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IdeaCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IdeaCard />)
    }).not.toThrow()
  })
})
