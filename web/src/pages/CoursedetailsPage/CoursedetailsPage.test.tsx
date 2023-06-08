import { render } from '@redwoodjs/testing/web'

import CoursedetailsPage from './CoursedetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CoursedetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CoursedetailsPage />)
    }).not.toThrow()
  })
})
