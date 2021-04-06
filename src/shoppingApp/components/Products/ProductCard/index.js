import React, { Suspense } from 'react';
//fade-in
import VisibilitySensor from "react-visibility-sensor";



//Gatsby
import { Link } from "gatsby";
/* import Img from "gatsby-image/withIEPolyfill" */
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage} from 'gatsby-plugin-image'


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
} from "../../../redux/Shopping/shopping-actions";

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

const ProductCard = React.memo(({ product, addToCart, loadCurrentItem, index, merch }) => {
  const classes = useStyles();
  const {
    type_name,
    slug,
    alt,
    id,
    price
  } = product

  let prodImg = []
  prodImg = merch.nodes.filter(x => x.id === id)

  function onChange (isVisible) {
/*     console.log('Element is now %s', isVisible ? 'visible' : 'hidden'); */
  }



  const data = useStaticQuery(
    graphql`
      query {
        allWindowsJsonDataJson {
          nodes {
            slug
            id
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
                gatsbyImageData
              }
            }
          }
        }
      }
      
    `
  )
  const allProducts = data.allWindowsJsonDataJson.nodes


  let prodGatsbyImg = []
  prodGatsbyImg = allProducts.filter(x => x.id === id)

  const imgGatsbySrc = prodGatsbyImg[0].image.childImageSharp.gatsbyImageData



  

  return (
    <>    <Suspense fallback={
    <div className={classes.spinner}>
      <CircularProgress color="secondary" />
    </div>}>
          <VisibilitySensor
      onChange={onChange}
      minTopValue={50}
      offset={{top:10}}
      partialVisibility
      >
      {({isVisible}) => (<Grow 
      in={isVisible}
      style={{ transformOrigin: '0 0 0' }}
      /* {...(isVisible ? { timeout: 1000+(100*index) } : {})} */>
      <Card className={classes.root} elevation={5} variant="outlined">
        <Link to={`/oferta/${alt}/${slug}`}>
            <CardActionArea className={classes.cardActionArea}>
{/*                     <Img 
                    fluid={imgSrc}
                    fadeIn={true}
                    durationFadeIn={fadeInDuration}
                    title={type_name}
                    alt={type_name}
                    loading="lazy"
                    fadeIn="true"
                    backgroundColor="rgb(255,255,255)"
                    backgroundColor="radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(187,187,187,1) 100%)"
                    objectFit="contain"
                    className={classes.media}
                    /> */}
                    <GatsbyImage 
                                key={id}
                                image={imgGatsbySrc}
                                className={classes.media}
/*                                 loading="eager" */
                    
                    />

              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h2" className={classes.typeName}>
                {type_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {price}
                </Typography>
              </CardContent>
            </CardActionArea>
        </Link>
        <CardActions className={classes.cardActions}>

          <Button size="medium" variant="contained" color="secondary"  href={`/oferta/${alt}/${slug}`} onClick={() => loadCurrentItem(product)}>
          Więcej
          </Button>

          <Button size="medium" variant="contained" color="primary" onClick={() => addToCart(id)}>
            Zamów
          </Button>
        </CardActions>
      </Card>
      </Grow>)}
      </VisibilitySensor>
    </Suspense>
    </>
  );
})

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
      loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(ProductCard);
  