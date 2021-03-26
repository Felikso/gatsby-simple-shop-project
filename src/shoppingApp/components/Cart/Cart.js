import React, { useState, useEffect } from "react";

import { connect } from "react-redux";


import ContactFormDialog from "./ContactForm/ContactFormDialog"

import FormSummary from "./FormSummary"

import CartBox from "./CartBox"

const Cart = ({ cart, merch }) => {

  return (
    <>

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
