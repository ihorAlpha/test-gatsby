import * as React from 'react'
import Layout from '../components/layout.js'
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="cat on the hat"
        src="../images/medium.webp"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage