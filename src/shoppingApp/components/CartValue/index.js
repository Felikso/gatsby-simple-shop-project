import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import CartCounter from './CartCounter'

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    borderRadius: '50%',
    height: 50,
    width: 50,
    fontSize: 15,
    padding: 10,
    position: "absolute",
  },

}));

const CartValue = ({ cart }) => {

  const [cartCount, setCartCount] = useState(0);

/*   function handleCartChange() {
    document.getElementById("cartValuteBtn").click().preventDefault()

  } */

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
/*     handleCartChange(); */

  }, [cart, cartCount]);

const valueOfCart = cartCount
const classes = useStyles();

  return (

        <CartCounter cartCount={cartCount}/>


  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(CartValue);
