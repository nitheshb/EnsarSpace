import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CourceContentPage = () => {
  return (
    <>
      <MetaTags title="CourceContent" description="CourceContent page" />

      <h1>CourceContentPage</h1>
      <p>
        Find me in <code>./web/src/pages/CourceContentPage/CourceContentPage.tsx</code>
      </p>
      <p>
        My default route is named <code>courceContent</code>, link to me with `
        <Link to={routes.courceContent()}>CourceContent</Link>`
      </p>
    </>
  )
}

export default CourceContentPage
