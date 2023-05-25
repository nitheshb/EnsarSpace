import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MyjourneyPage = () => {
  return (
    <>
      <MetaTags title="Myjourney" description="Myjourney page" />

      <h1>MyjourneyPage</h1>
      <p>
        Find me in <code>./web/src/pages/MyjourneyPage/MyjourneyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>myjourney</code>, link to me with `
        <Link to={routes.myjourney()}>Myjourney</Link>`
      </p>
    </>
  )
}

export default MyjourneyPage
