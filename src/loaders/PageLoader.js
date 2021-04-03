import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import LoaderSVG from './puff.svg'
import './loader.css'


export default function PageLoader() {
 /*  const siteData = graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
}
`

const { site } = useStaticQuery(
  graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `
)
  console.log(site)
  console.log('props.data') */ //to na kiedyś do ogarnięcia
    return (
      <div>
      <div
          key={`loader`}
          id="___loader"
      >
          <p className='___main-text'>Ventus Trade Okna</p>
          <p className='___main-text dots'>• • •</p>

      </div>

  </div>
    )
}

/* export const siteData = graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
}
`; */
