import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../containers/Layout"
import SEO from "../components/seo"

//lazy load
import loadable from '@loadable/component'

const ContactForm = loadable(() => import('../containers/ContactForm'))

const ContactFormPage = () => (
  <Layout>
    <SEO title="Formularz kontaktowy" />
    
    <ContactForm />
    
  </Layout>
)

export default ContactFormPage
