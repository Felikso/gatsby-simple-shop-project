import React, { useEffect, useState, useRef } from "react";
import "./ProductsVirtualized.scss"


import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage} from 'gatsby-plugin-image'

import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

import { FixedSizeList } from 'react-window';
/* import AutoSizer from "react-virtualized-auto-sizer" */

import './reactWindow.scss'
//lazy load
/* import loadable from '@loadable/component'

import * as styles from "./Products.module.css"; */

/* const ProductCard = loadable(() => import('./ProductCard'))
 */
// Redux
import { connect } from "react-redux";


/* import Product from "./Product/Product"; */
import ProductCard from "./ProductCard"


//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

const useStyles = makeStyles((theme) => ({
  productsContainer: {
    marginTop: 20,
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
/*       paddingLeft: 74, */
    },
  },
  sadIcon: {
    height: 70,
    width: 70,
    color: 'red',
    marginTop: 30,
  },
  noResultBox: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '90%',
    margin: 'auto',
    marginTop: 30,
  }
 
}));




const Products = ({ sortedProducts, merch }) => {

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

  console.log(allProducts)
  console.log('allProducts')



/*   const [checked, setChecked] = React.useState(true); */

  const classes = useStyles();

  const items = sortedProducts
/*   console.log(items) */
/*   const Row = ({ index, style }) => (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      Row {index.id}
    </div>
    ) */

    const materialCardsNew = sortedProducts.map((product, index)=>
      <Grid item><ProductCard key={product.id} product={product} index={index} merch={merch} /></Grid>
    )
 
//react-window function to make a row:
const Row = array=> ({ index }) => array[index] //is MaterialCard


const cache = useRef(
  new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 350,
  })
);

const ITEMS_COUNT = sortedProducts.length
const ITEM_SIZE = 350

const [people, setPeople] = useState([]);

/* setPeople(sortedProducts) */



useEffect(() => {
  setPeople(
    ...sortedProducts
  );
  console.log('scrolll')
});

/* const people = sortedProducts */


  if(sortedProducts.length === 0){
    return (
      <Grid container xs={12} className={classes.noResultBox}>
        <Typography variant="h5" component="h4">Niestety ustawione parametry nie pasują do oferowanych produktów</Typography>
        <SentimentDissatisfiedIcon className={classes.sadIcon}/>
      </Grid>
    )
      }

  return (
    <>

{/*     <Grid container spacing={3} className={classes.productsContainer}>
      {sortedProducts.map((product, index)=> (
      <Grid item><ProductCard key={product.id} product={product} index={index} merch={merch} /></Grid>
      ))}
    </Grid> */}

{/* <div style={{ width: "100%", height: "100vh" }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={cache.current.rowHeight}
              deferredMeasurementCache={cache.current}
              rowCount={sortedProducts.length}
              
              rowRenderer={({ key, index, style, parent }) => {
                const product = sortedProducts[index];

                return (
                  <CellMeasurer
                    key={key}
                    cache={cache.current}
                    height={100}
                    parent={parent}
                    columnIndex={0}
                    rowIndex={index}
                  >
                    <div style={style}>
                    <Grid item><ProductCard key={product.id} product={product} index={index} merch={merch} /></Grid>
                    </div>
                  </CellMeasurer>
                );
              }}
            />
          )}
        </AutoSizer>
      </div> */}
<div className="auto-sizer-box">
<AutoSizer>
    {({ height, width }) => {
      const itemsPerRow = Math.floor(width / (ITEM_SIZE/1.5));
      const rowCount = Math.ceil(ITEMS_COUNT / itemsPerRow);
      
      return (
        <List
          className='List'
          width={width}
          height={height}
          rowCount={rowCount}
          rowHeight={ITEM_SIZE}
          rowRenderer={
            ({ index, key, style }) => {
              const items = [];
              const products = [];
              let prod = [];
              const fromIndex = index * itemsPerRow;
              const toIndex = Math.min(fromIndex + itemsPerRow, ITEMS_COUNT);
              const oneProduct = sortedProducts;

/*               for (let i = fromIndex; i < toIndex; i++) {
                items.push(
                  <div
                    className='Item'
                    key={i}
                  >
                    Item {sortedProducts[i].type_name}
                  </div>
                )
              } */

              for (let i = fromIndex; i < toIndex; i++) {
                items.push(
                  <div
/*                     className='Item' */
                    key={i}
                  >
                    Item {sortedProducts[i].type_name}
                  </div>
                )
              }

              for (let i = fromIndex; i < toIndex; i++) {
                let product = sortedProducts[i]
                products.push(
 
<Grid key={i} item><ProductCard  product={product} index={index} merch={merch} /></Grid>
           
                )
              }
              return (
                <div
                  className='Row'
                  key={key}
                  style={style}
                >
                  
                  {products}
                </div>
              )
            }
          }
        />
      )
    }}
  </AutoSizer>
  </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
