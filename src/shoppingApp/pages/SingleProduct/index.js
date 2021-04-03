import React from "react";
/* import * as styles from "./SingleItem.module.css"; */

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";


import { Link } from "gatsby";
import { ProductContext } from "../../context/context";



//components
import SingleProductMovieCard from '../../components/SingleProductMovieCard'

//Material UI
import Grid from '@material-ui/core/Grid';

const SingleItem = ({ current, addToCart, merch }) => {

  console.log(merch)

  const {
    slug,
    type_name,
    long_name,
    attr,
    id,
    price,
  } = current

  let attrArray = []

  if(attr){
    attrArray = attr.split(";")
  }
 

  return (


    <>
                <Link to="/oferta" className="btn-primary">
              wróć do oferty
            </Link>


<Link to="/oferta" className='a-back'> Powrót </Link>
<Grid container xs={12}>
<hr />
<h6>{long_name}</h6>
<h2>{slug}</h2>
<hr />
</Grid>




<main className="single-product-box">
<Grid container xs={12}>
<img src={`https://www.okna.ventus-trade.pl/assets/img/products/main-types/${slug}.png`} />
    <div>
    <ul>
            {
              attrArray.map((attr, i) => (
                <li key={i}>{attr}</li>
              ))
            }
          </ul> 
    <button
          onClick={() => addToCart(id)}

        >
          Zamów
        </button>
    </div>

    </Grid>
    <Grid container xs={12}>
    <SingleProductMovieCard current={current}/>
    </Grid>
</main>



    </>
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







