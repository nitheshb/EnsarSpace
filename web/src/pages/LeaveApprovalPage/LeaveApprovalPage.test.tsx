import { render } from '@redwoodjs/testing/web'

import LeaveApprovalPage from './LeaveApprovalPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LeaveApprovalPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LeaveApprovalPage />)
    }).not.toThrow()
  })
})
