import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./Product.module.css";


//material ui
import Grow from '@material-ui/core/Grow';

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";


const Product = ({ product, addToCart, loadCurrentItem, index }) => {


  const {
    type_name,
    slug,
    alt,
    id,
    price
  } = product
  return (
    <Grow
    in={true}
    style={{ transformOrigin: '0 0 0', transition: '100ms', transform: '100ms', transition: 'opacity 1000ms', transitionDelay: true ? 200*index+'ms' : '0ms' }}
 /*    {...(true ? { timeout: (1000) } : {})} */
>
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={`https://www.okna.ventus-trade.pl/assets/img/products/main-types/${slug}.png`}
        alt={type_name}
      />
  <div className={styles.product__info}>
      <div className={styles.product__details}>
        <p className={styles.details__title}>{type_name}</p>
        <p className={styles.details__price}>$ {price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/oferta/${alt}/${slug}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            Więcej
          </button>
        </Link>
        <button
          onClick={() => addToCart(id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Zamów
        </button>
      </div>
    </div>
  </div>
  </Grow>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
