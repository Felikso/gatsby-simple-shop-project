import React, {useState} from "react";
//lazy load
import loadable from '@loadable/component'

import * as styles from "./Products.module.css";

/* const ProductCard = loadable(() => import('./ProductCard'))
 */
// Redux
import { connect } from "react-redux";


import Product from "./Product/Product";
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



  const [checked, setChecked] = React.useState(true);

  const classes = useStyles();

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

    <Grid container spacing={3} className={classes.productsContainer}>
      {sortedProducts.map((product, index)=> (
      <Grid item><ProductCard key={product.id} product={product} index={index} merch={merch} /></Grid>
      ))}
    </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
