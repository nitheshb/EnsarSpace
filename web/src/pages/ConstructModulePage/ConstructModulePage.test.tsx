import { render } from '@redwoodjs/testing/web'

import ConstructModulePage from './ConstructModulePage'


describe('ConstructModulePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConstructModulePage />)
    }).not.toThrow()
  })
})
