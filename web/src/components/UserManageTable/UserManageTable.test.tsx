import { render } from '@redwoodjs/testing/web'

import geTable from './UserManageTable'

describe('geTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserManageTable />)
    }).not.toThrow()
  })
})
