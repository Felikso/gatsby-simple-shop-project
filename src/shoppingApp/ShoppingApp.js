import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./ShoppingApp.css";
import "./index.css"


import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";

import SingleProductTest from "./pages/SingleProduct"
import Offer from "./pages/Offer"



import {connect} from 'react-redux'



function ShoppingApp({ current }) {

  return (

        <Router>
          <div className="ShoppingApp">

            <Switch>
              <Route exact path="/oferta" component={Offer} />
              <Route exact path="/oferta/koszyk" component={Cart} />
{/*               {!current ? (
            <Redirect to="/oferta" />
          ) : ( */}
            <Route exact path="/oferta/:alt/:slug" current={current} component={SingleItem} />
     {/*      )} */}
            </Switch>
          </div>
        </Router>

  );
}

const mapStateToPtops = state => {
  return {
    current: state.shop.currentItem
  }
}

export default connect(mapStateToPtops)(ShoppingApp);


