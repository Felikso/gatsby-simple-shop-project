import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../containers/Layout"
import SEO from "../components/SEO"


const ContactPage = () => (
  <Layout>
    <SEO title="Kontakt" />
    <h1>Kontaktowa strona</h1>
    <Link to="/">home</Link>
    <Link to="/oferta">oferta</Link>

        

  </Layout>
)

export default ContactPage
