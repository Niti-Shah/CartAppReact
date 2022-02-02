import React from 'react'
import Product from './Product.js'

//props ka data cannot be changed, it's like a pure function in js, shows it as objects
export default function ProductList(props) {
    return (
        props.prodList.length > 0 ?
        props.prodList.map((product, i) => {
            return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} index={i} removeItem={props.removeItem}/>
        })
        : <h1>No Products exist in the cart, please add some products to be shown here</h1>
    )
}
