import * as React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../containers/Layout"
import SEO from "../components/SEO"

export const query = graphql`
  query {
    allWindowsJsonDataJson {
        nodes {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          type_name
          id
          slug
        }
      }
  }
`

const Test = ({ data }) => {
    const merch = data.allWindowsJsonDataJson

    return (
        <Layout>
        <SEO title="Home" />
        <h1>test</h1>
        {merch.nodes.map(product => (
        <div>

          <p>{product.type_name}</p>
          <p>{product.slug}</p>
          <Image
            fluid={product.image.childImageSharp.fluid}
            alt={product.type_name}
          />
        </div>
      ))}
    
      </Layout>
      )

}




export default Test
