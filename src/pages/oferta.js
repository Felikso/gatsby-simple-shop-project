import React, { Suspense } from "react"
import OfferComponent from '../shoppingApp/OfferComponent'
import { Router as MyRouter } from "@reach/router"

//lazy load
import loadable from '@loadable/component'

//gatsby
import { graphql } from "gatsby"



/* import Layout from "../containers/Layout"

import Cart from "../shoppingApp/components/Cart/Cart";
import SingleItem from "../shoppingApp/components/SingleItem/SingleItem";
import Offer from "../shoppingApp/pages/Offer" */

const Layout = loadable(() => import('../containers/Layout'))

const Cart = loadable(() => import('../shoppingApp/components/Cart/Cart'))
const SingleProduct = loadable(() => import('../shoppingApp/pages/SingleProduct'))
const Offer = loadable(() => import('../shoppingApp/pages/Offer'))

export const query = graphql`
  query {
    allWindowsJsonDataJson {
        nodes {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          type_name
          id
          slug
        }
      }
  }
`


const Router = ({ current, data }) => {
  const merch = data.allWindowsJsonDataJson
  return (
    <Layout>
    <MyRouter>

              <Offer  path="/oferta" merch={merch} />
              <Cart exact path="/oferta/koszyk" merch={merch} />

            <SingleProduct path="/oferta/:alt/:slug" current={current} merch={merch} />

    </MyRouter>
    </Layout>
  )
}

export default Router