import React, { memo } from "react"
/* import { GatsbyImage } from "gatsby-plugin-image" */
import GatsbyImage from "gatsby-image"

import { graphql, useStaticQuery } from 'gatsby'

import { areEqual } from "react-window"

//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../redux/Shopping/shopping-actions";

const useStyles = makeStyles({
    root: {
      maxWidth: 200,
      background: 'rgb(255,255,255)',
      background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(187,187,187,1) 100%);',
    },
    media: {
      height: 200,
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
      objectFit:"contain!important",
    },
    typeName: {
      fontSize: '0.8rem',
    },
    cardActionArea:{
  
    },
    cardActions: {
      justifyContent: 'space-between',
    },
    spinner: {
      display: 'flex',
    },
  });



const Cell = memo(({ columnIndex, rowIndex, style, data, product, addToCart, loadCurrentItem, index, merch }) => {
    const { cards, columnCount } = data
    const singleColumnIndex = columnIndex + rowIndex * columnCount
    const card = cards[singleColumnIndex]

    const classes = useStyles();
    const {
      type_name,
      slug,
      alt,
      id,
      price
    } = product
  
  
    const imageData = useStaticQuery(
      graphql`
        query {
          allWindowsJsonDataJson {

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
    )
  
    let prodImg = []
    prodImg = imageData.allWindowsJsonDataJson.nodes.filter(x => x.id === card.id)

    console.log(prodImg)

    const allCards = imageData.allWindowsJsonDataJson.edges

    console.log(card.id)


/*     let prodCardImg = []
    prodCardImg = imageData.allWindowsJsonDataJson.filter(x => x.id === id) */
  
/*     const imgCardSrc = prodCardImg[0].image.childImageSharp.gatsbyImageData */
  
    console.log(imageData.allWindowsJsonDataJson)
    
    const productsImage = prodImg[0].image.childImageSharp.gatsbyImageData

    
  
    return (
      <div style={style}>
        {card && (
          <div
            key={card.id}
            style={{
              width: "286px",
              height: "395px",
              display: "inline-block",
            }}
          >
            <GatsbyImage
              title={card.type_name}
              alt={card.type_name}
/*               image={productsImage} */
              fluid={card.image.childImageSharp.fluid}
            />
            <h2>{card.type_name}</h2>
          </div>
        )}
      </div>
    )
  }, areEqual)



  const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
      loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(Cell);