import { render } from '@redwoodjs/testing/web'

import LeaveManagementPage from './LeaveManagementPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LeaveManagementPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LeaveManagementPage />)
    }).not.toThrow()
  })
})
