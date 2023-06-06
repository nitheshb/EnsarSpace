import { render } from '@redwoodjs/testing/web'

import TimeoffPage from './TimeoffPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TimeoffPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TimeoffPage />)
    }).not.toThrow()
  })
})
