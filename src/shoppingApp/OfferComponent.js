import React from 'react'
import ShoppingApp from './ShoppingApp'

import { Provider } from "react-redux"
import { ProductProvider }  from "./context/context"
import store from "./redux/store"

export default function OfferComponent() {
    return (
/*         <Provider store={store}>
            <ProductProvider> */
                <ShoppingApp />



    )
}
