import { render } from '@redwoodjs/testing/web'

import LaptopDetailPage from './LaptopDetailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LaptopDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LaptopDetailPage />)
    }).not.toThrow()
  })
})
