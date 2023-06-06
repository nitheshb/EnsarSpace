import { render } from '@redwoodjs/testing/web'

import LeaveApproval from './LeaveApproval'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LeaveApproval', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LeaveApproval />)
    }).not.toThrow()
  })
})
