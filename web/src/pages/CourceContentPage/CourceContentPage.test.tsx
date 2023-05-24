import { render } from '@redwoodjs/testing/web'

import CourceContentPage from './CourceContentPage'


describe('CourceContentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CourceContentPage />)
    }).not.toThrow()
  })
})
