import { render } from '@redwoodjs/testing/web'

import LearningPage from './LearningPage'



describe('LearningPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LearningPage />)
    }).not.toThrow()
  })
})
