import React from "react";
import * as styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = ({ current, addToCart, merch }) => {

  console.log(merch)

  const {
    slug,
    type_name,
    attr,
    id,
    price,
  } = current

  let attrArray = []

  if(attr){
    attrArray = attr.split(";")
  }
 

  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={`https://www.okna.ventus-trade.pl/assets/img/products/main-types/${slug}.png`}
        alt={type_name}
      />
      <div className={styles.singleItem__details}>
        <div className={styles.details__info}>
          <p className={styles.details__type_name}>{type_name}</p>
          
          <ul>
            {
              attrArray.map((attr, i) => (
                <li key={i}>{attr}</li>
              ))
            }
          </ul> 
          <p className={styles.details__price}>$ {price}</p>
        </div>
        <button
          onClick={() => addToCart(id)}
          className={styles.details__addBtn}
        >
          Zamów
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
