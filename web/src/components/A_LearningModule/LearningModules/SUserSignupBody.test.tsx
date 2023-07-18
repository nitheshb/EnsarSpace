import { render } from '@redwoodjs/testing/web'

import SUserSignupBody from './CourseDetails'

describe('SUserSignupBody', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SUserSignupBody />)
    }).not.toThrow()
  })
})
