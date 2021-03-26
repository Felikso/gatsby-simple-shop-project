import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../containers/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>HOME</h1>
    <Link to="/kontakt">kontakt</Link>
    <Link to="/oferta">oferta</Link>
  </Layout>
)

export default IndexPage
