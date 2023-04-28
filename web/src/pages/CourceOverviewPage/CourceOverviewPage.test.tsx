import { render } from '@redwoodjs/testing/web'

import CourceOverviewPage from './CourceOverviewPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CourceOverviewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CourceOverviewPage />)
    }).not.toThrow()
  })
})
