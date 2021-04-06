import React from "react";

import SEO from '../../../components/SEO'

import { connect } from "react-redux";


/* import ContactFormDialog from "./ContactForm/ContactFormDialog" */

import FormSummary from "./FormSummary"

import CartBox from "./CartBox"

const Cart = ({ cart, merch }) => {
  const title = 'Twój koszyk z zamówiem';
	const description = `Koszyk z zamówieniem w ofercie Ventus Trade Okna.🐯 Wspólnie stwórzmy doskonały wygląd Twojego Domu.🏡`;
	const image = 'https://okna.ventus-trade.pl/images/logo-ventus-trade-okna.png';
	const slug = `/oferta/koszyk`;

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

          <FormSummary />

        <CartBox cart={cart} merch={merch} />

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
