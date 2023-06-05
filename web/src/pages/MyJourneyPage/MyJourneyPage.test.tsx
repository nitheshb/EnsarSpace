import { render } from '@redwoodjs/testing/web'

import MyJourneyPage from './MyJourneyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyJourneyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyJourneyPage />)
    }).not.toThrow()
  })
})
