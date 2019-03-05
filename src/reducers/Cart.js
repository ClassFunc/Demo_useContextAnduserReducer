import {ADD_PRODUCT, REMOVE_PRODUCT} from '../config/constants'

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  )
  console.log('reduce produce: ', product, state)
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 })
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    }
    updatedItem.quantity++
    updatedCart[updatedItemIndex] = updatedItem
  }
  console.log('Add product to cart: ', updatedCart)
  return { ...state, cart: updatedCart }
}

const removeProductFromCart = (productId, state) => {
  console.log('Removing product with id: ' + productId)
  const cart = [...state.cart]
  const itemIndex = cart.findIndex(
     item => item.id === productId
  )
  const removeItem = {
    ...cart[itemIndex]
  }
  removeItem.quantity--
  if (removeItem.quantity <= 0) {
    cart.splice(itemIndex, 1)
  } else {
    cart[itemIndex] = removeItem
  }
  return { ...state, cart }
}

export const Cart = (state, action) => {
   switch (action.type) {
      case ADD_PRODUCT:
         // const {product} = action
         // console.log('reduce produce: ', product, state)
         // const updatedCart = [...state.cart];
         // const updatedItemIndex = updatedCart.findIndex(
         //    item => item.id === product.id
         // )
         // if (updatedItemIndex < 0) {
         //    updatedCart.push({...product, quantity: 1});
         // } else {
         //    const updatedItem = {
         //       ...updatedCart[updatedItemIndex]
         //    };
         //    updatedItem.quantity++;
         //    updatedCart[updatedItemIndex] = updatedItem;
         // }
         //
         // return {...state, cart: updatedCart}
         return addProductToCart(action.product, state)
      case REMOVE_PRODUCT:
         // const {productId} = action
         // console.log('Removing product with id: ' + productId);
         // const cart = [...state.cart];
         // const removeItemIndex = cart.findIndex(
         //    item => item.id === productId
         // )
         // const removeItem = {
         //    ...cart[removeItemIndex]
         // }
         // removeItem.quantity--
         // if (removeItem.quantity <= 0) {
         //    cart.splice(removeItemIndex, 1)
         // } else {
         //    cart[removeItemIndex] = removeItem
         // }
         // return {...state, cart}
         return removeProductFromCart(action.productId, state)
      default:
         return {...state}
   }
}
