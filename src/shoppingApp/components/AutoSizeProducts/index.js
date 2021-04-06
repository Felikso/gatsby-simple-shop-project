import React, { memo } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { graphql, useStaticQuery } from 'gatsby'

import { FixedSizeGrid as GridReactWindow, areEqual } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import memoize from "memoize-one"

import "./cards.css"

import Cell from "./Cell"


//Material Ui
import { makeStyles } from '@material-ui/core/styles';


// Redux
import { connect } from "react-redux";




const createItemData = memoize(({ columnCount, cards }) => ({
  columnCount,
  cards,
}))





const Cards = ({ cards }) => (
  <div
    style={{
      minHeight: "100vh",
      backgroundColor: "#d6cae2",
      marginTop: "2em",
      position: "sticky",
      top: "0px",
    }}
  >
    <AutoSizer defaultWidth={1920} defaultHeight={1080}>
      {({ width, height }) => {
        const cardWidth = 230
        const cardHeight = 395
        const columnCount = Math.floor(width / cardWidth)
        const rowCount = Math.ceil(cards.length / columnCount)
        const itemData = createItemData({ cards, columnCount })
        return (
          <GridReactWindow
            className="grid"
            width={width}
            height={height}
            columnCount={columnCount}
            columnWidth={cardWidth}
            rowCount={rowCount}
            rowHeight={cardHeight}
            itemData={itemData}
          >
            {<Cell product={cards} />}
          </GridReactWindow>
        )
      }}
    </AutoSizer>
  </div>
)

export const query = graphql`
  query indexPage {
    allWindowsJsonDataJson {
      edges {
        node {
          id
          type_name
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
              gatsbyImageData
            }
          }
        }
      }
      nodes {
        id
        type_name
        slug
        image {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            gatsbyImageData
          }
        }
      }
    }
  }
`


const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    };
  };
  
  export default connect(mapStateToProps)(Cards);
