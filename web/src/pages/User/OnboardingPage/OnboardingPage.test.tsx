import { render } from '@redwoodjs/testing/web'

import OnboardingPage from './OnboardingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OnboardingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingPage />)
    }).not.toThrow()
  })
})
