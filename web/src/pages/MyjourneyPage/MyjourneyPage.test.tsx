import { render } from '@redwoodjs/testing/web'

import MyjourneyPage from './MyjourneyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyjourneyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyjourneyPage />)
    }).not.toThrow()
  })
})
