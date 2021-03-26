import React from 'react'
import './CartCounter.css'

export default function CartCounter({ cartCount }) {
    return (
<span className="cart-value-circle"> 
<span className="cart-value-circle-count">{cartCount}</span>
</span>
    )
}
