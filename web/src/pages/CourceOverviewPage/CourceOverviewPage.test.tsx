import { render } from '@redwoodjs/testing/web'

import CourceOverviewPage from './CourceOverviewPage'


describe('CourceOverviewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CourceOverviewPage />)
    }).not.toThrow()
  })
})
