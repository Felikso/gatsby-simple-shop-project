import React, { useEffect } from "react";

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


const cache = React.useRef(
  new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100,
  })
);

const ITEMS_COUNT = 98
const ITEM_SIZE = 300

const [people, setPeople] = React.useState([sortedProducts]);

/* setPeople(sortedProducts) */

/* React.useEffect(() => {
  setPeople(
    [...Array(1000).keys()].map((key) => {
      return {
        id: key,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        bio: faker.lorem.lines(Math.random() * 100),
      };
    })
  );
}, []); */

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

{/* <AutoSizer>
  {({ height, width, product, index  }) => (
    <List
      className="List"
      height={100}
      itemCount={1000}
      itemSize={35}
      width={100}
      itemCount={items.length}
    >
      {Row(materialCardsNew)}
    </List>
  )}
</AutoSizer> */}

{/* <FixedSizeList
    height={1000}
    width={1000}
    itemSize={120}
    itemCount={items.length}
  >
      {Row(materialCardsNew)}
  </FixedSizeList> */}

<div style={{ width: "100%", height: "100vh" }}>
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
