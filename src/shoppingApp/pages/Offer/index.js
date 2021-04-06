import React from 'react'
import OfferLoader from '../../components/OfferLoader'
import ProductsFilter from "../../components/ProductsFilter"

import {ProductConsumer, withProductConsumer} from '../../context/context'
import windowsData from "../../data/windowsData"
import Products from "../../components/Products/Products"
import AutoSizeProducts from "../../components/AutoSizeProducts"


//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const onInitialClientRender = () => {
  setTimeout(function() {
      document.getElementById("offer-loader-box").style.display = "none"
  }, 3000)
}





function Offer({context, merch }) {

    const {loading, sortedProducts, products} = context;

    if(loading){
      return <OfferLoader title='wczytywanie produktów' />;
    }
    onInitialClientRender()
    return(
<>
        <OfferLoader title="wczytywanie oferty" />
        <ProductsFilter products={products} merch={merch}/>

       {/*  <AutoSizeProducts sortedProducts={sortedProducts} cards={sortedProducts} merch={merch}/> */}
        <Products sortedProducts={sortedProducts} merch={merch}/>
</>
      );

}

export default withProductConsumer(Offer)

