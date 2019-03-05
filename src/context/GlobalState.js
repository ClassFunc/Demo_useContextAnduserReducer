import React, {useReducer} from 'react'
import ShopContext from './shop-context'
import {ADD_PRODUCT, REMOVE_PRODUCT} from '../config/constants'
import {Cart} from '../reducers/Cart'
import {Product} from '../reducers/Product'

const GlobalState = props => {

   // reducer Product
   const [productState, productDispatch] = useReducer(Product, {
      products: [
         {id: 'p1', title: 'Gaming Mouse', price: 29.99},
         {id: 'p2', title: 'Harry Potter 3', price: 9.99},
         {id: 'p3', title: 'Used plastic bottle', price: 0.99},
         {id: 'p4', title: 'Half-dried plant', price: 2.99}
      ]
   })

   // reducer Cart
   const [cartState, cartDispatch] = useReducer(Cart, {cart: []})

   const addProductToCart = product => {
      console.log('Global add product to state: ', product)
      setTimeout(() => {
         cartDispatch({type: ADD_PRODUCT, product: product})
      }, 0);
   };

   const removeProductFromCart = productId => {
      console.log('Global remove product in state: ', productId)
      setTimeout(() => {
         cartDispatch({type: REMOVE_PRODUCT, productId: productId})
      }, 0);
   };

   return (
      <ShopContext.Provider
         value={{
            products: productState.products,
            cart: cartState.cart,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,
         }}
      >
         {props.children}
      </ShopContext.Provider>
   )
}

export default GlobalState
