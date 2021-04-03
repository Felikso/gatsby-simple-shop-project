import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "ventus-trade-background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageMobile = data.desktop.childImageSharp.fluid
  const imageDesktop = data.desktop.childImageSharp.fluid

  const sources = [
    imageMobile,
    {
      ...imageDesktop,
      media: `(min-width: 491px)`,
    },
  ]

  return (

    
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={sources}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
    width: 100%;
    height: 60vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export default StyledBackgroundSection