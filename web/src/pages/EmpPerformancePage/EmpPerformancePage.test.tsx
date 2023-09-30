import { render } from '@redwoodjs/testing/web'

import EmpPerformancePage from './EmpPerformancePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EmpPerformancePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmpPerformancePage />)
    }).not.toThrow()
  })
})
