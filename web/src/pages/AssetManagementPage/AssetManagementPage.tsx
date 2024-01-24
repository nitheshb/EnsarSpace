import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AssetManagementPage = () => {
  return (
    <>
      <MetaTags title="AssetManagement" description="AssetManagement page" />

      <h1>AssetManagementPage</h1>
      <p>
        Find me in <code>./web/src/pages/AssetManagementPage/AssetManagementPage.tsx</code>
      </p>
      <p>
        My default route is named <code>assetManagement</code>, link to me with `
        <Link to={routes.assetManagement()}>AssetManagement</Link>`
      </p>
    </>
  )
}

export default AssetManagementPage
