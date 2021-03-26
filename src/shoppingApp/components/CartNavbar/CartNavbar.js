import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as styles from "./CartNavbar.module.css";

import { connect } from "react-redux";

const CartNavbar = ({ cart }) => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);

  }, [cart, cartCount]);



  return (
    <div className={styles.CartNavbar}>
      <Link to="/oferta">
        <h2 className={styles.CartNavbar__logo}>Ventus Trade Sklep</h2>
      </Link>
      <Link to="/oferta/koszyk">
        <div className={styles.CartNavbar__cart}>
          <h3 className={styles.cart__title}>Koszyk</h3>
          <img
            className={styles.cart__image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(CartNavbar);
