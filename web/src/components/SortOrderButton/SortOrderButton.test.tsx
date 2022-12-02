import { render } from '@redwoodjs/testing/web'

import SortOrderButton from './SortOrderButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SortOrderButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SortOrderButton />)
    }).not.toThrow()
  })
})
