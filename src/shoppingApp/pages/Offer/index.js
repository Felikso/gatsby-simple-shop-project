import React from 'react'
import ProductsFilter from "../../components/ProductsFilter"

import {ProductConsumer, withProductConsumer} from '../../context/context'
import windowsData from "../../data/windowsData"
import Products from "../../components/Products/Products"


//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



function Offer({context, merch }) {

    const {loading, sortedProducts, products} = context;

    if(loading){
      return <p>loading</p>;
    }
    
    return(
<>

        <ProductsFilter products={products} merch={merch}/>

        <Products sortedProducts={sortedProducts} merch={merch}/>
</>
      );

}

export default withProductConsumer(Offer)

