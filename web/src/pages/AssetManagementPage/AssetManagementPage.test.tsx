import { render } from '@redwoodjs/testing/web'

import AssetManagementPage from './AssetManagementPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AssetManagementPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AssetManagementPage />)
    }).not.toThrow()
  })
})
