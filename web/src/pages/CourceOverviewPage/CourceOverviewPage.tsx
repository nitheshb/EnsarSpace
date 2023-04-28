import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CourceOverviewPage = () => {
  return (
    <>
      <MetaTags title="CourceOverview" description="CourceOverview page" />

      <h1>CourceOverviewPage</h1>
      <p>
        Find me in <code>./web/src/pages/CourceOverviewPage/CourceOverviewPage.tsx</code>
      </p>
      <p>
        My default route is named <code>courceOverview</code>, link to me with `
        <Link to={routes.courceOverview()}>CourceOverview</Link>`
      </p>
    </>
  )
}

export default CourceOverviewPage
