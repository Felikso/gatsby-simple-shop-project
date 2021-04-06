import * as React from "react"

//lazy load
import loadable from '@loadable/component'

import { Link, useStaticQuery, graphql } from "gatsby"
/* import { StaticImage } from "gatsby-plugin-image"
import BackgroundImage from 'gatsby-background-image' */

/* import Layout from "../containers/Layout"
import SEO from "../components/seo" */

const Layout = loadable(() => import('../containers/Layout'))
const SEO = loadable(() => import('../components/SEO'))
//components
/* import HeroHomeText from "../components/HeroHomeText"



import StyledBackgroundSection from '../components/StyledBackgroundSection' */

//Components
const HeroHomeText = loadable(() => import('../components/HeroHomeText'))
const StyledBackgroundSection = loadable(() => import('../components/StyledBackgroundSection'))


/* import '../mainCss/background-image.css' */

function IndexPage(props) {
  const title = 'Ventus Trade Okna';
	const description = 'Strona główna Ventus Trade Okna.';
	const image = 'https://okna.ventus-trade.pl/images/logo-ventus-trade-okna.png';
	const slug = '/';

  const data = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: {eq: "ventus-trade-background.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
         desktopImage: file(relativePath: {eq: "ventus-trade-background.png"}) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set data
const imageMobile = data.mobileImage.childImageSharp.fluid
const imageDesktop = data.desktopImage.childImageSharp.fluid
  
  return (
        <Layout>

<SEO
				title={title}
				description={description}
				image={image}
				slug={slug}
			>
				<script type='application/ld+json'>
					{`{
						'@context': 'https://schema.org',
						'@type': 'Organization',
						'@id': 'https://okna.ventus-trade.pl${slug}',
						'headline': ${title},
						'description': ${description}
					}`}
				</script>
			</SEO>

{/*         <BackgroundImage
          className="home-background-image"
          fluid={props.data.indexImage.childImageSharp.fluid}
        >
          <div className="black-overlay">
            <div className="content-box">
              <h2>Ventus Trade Okna</h2>
            </div>
          </div>
        </BackgroundImage> */}
        <StyledBackgroundSection>
          <HeroHomeText />
        </StyledBackgroundSection>
        <Link to="/kontakt">kontakt</Link>
        <Link to="/oferta">oferta</Link>
        </Layout>
  )
  
}

export default IndexPage

/* export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: {eq: "ventus-trade-background.png"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`; */


