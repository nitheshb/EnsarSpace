import { render } from '@redwoodjs/testing/web'

import LaptopDetailsPage from './LaptopDetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LaptopDetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LaptopDetailsPage />)
    }).not.toThrow()
  })
})
