import { render } from '@redwoodjs/testing/web'

<<<<<<<< HEAD:web/src/components/LeaveApproval/LeaveApproval.test.tsx
import LeaveApproval from './LeaveApproval'
========
import TimeoffPage from './TimeoffPage'
>>>>>>>> 60f16d61c61f7ae5fe4e567796ae1e9178706b77:web/src/pages/TimeoffPage/TimeoffPage.test.tsx

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

<<<<<<<< HEAD:web/src/components/LeaveApproval/LeaveApproval.test.tsx
describe('LeaveApproval', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LeaveApproval />)
========
describe('TimeoffPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TimeoffPage />)
>>>>>>>> 60f16d61c61f7ae5fe4e567796ae1e9178706b77:web/src/pages/TimeoffPage/TimeoffPage.test.tsx
    }).not.toThrow()
  })
})
