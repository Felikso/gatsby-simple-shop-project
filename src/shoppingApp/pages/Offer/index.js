import React from 'react'

//lazy load
import loadable from '@loadable/component'

import SEO from '../../../components/SEO'

/* const SEO = loadable(() => import('../../../components/SEO')) */
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
  const title = 'Oferta';
	const description = 'Strona prezentuje aktualną ofertę produktów, z których skomponujemy dla Państwa właściwie spersonalizowany projekt.';
	const image = 'https://okna.ventus-trade.pl/images/logo-ventus-trade-okna.png';
	const slug = '/oferta';

    const {loading, sortedProducts, products} = context;

    if(loading){
      return (
        <>
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
      <OfferLoader title='wczytywanie produktów' />
      </>);
    }
    onInitialClientRender()
    return(
<>
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
        <OfferLoader title="wczytywanie oferty" />
        <ProductsFilter products={products} merch={merch}/>

       {/*  <AutoSizeProducts sortedProducts={sortedProducts} cards={sortedProducts} merch={merch}/> */}
        <Products sortedProducts={sortedProducts} merch={merch}/>
</>
      );

}

export default withProductConsumer(Offer)

