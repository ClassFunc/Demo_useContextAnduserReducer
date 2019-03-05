import React, {useContext} from 'react'
import ShopContext from '../../context/shop-context'
import MainNavigation from '../MainNavigation/MainNavigation'
import './Cart.css'

function CartPage(props) {

   const context = useContext(ShopContext)

   const {cart} = useContext(ShopContext)
   console.log('Cart props: ', props)

   return (
      <div>
         <MainNavigation
            cartItemNumber={cart.reduce((count, curItem) => {
               console.log(count, curItem)
               return count + curItem.quantity;
            }, 0)}
            path={props.match.path}
         />
         <main className="cart">
            {cart.length <= 0 && <p>No Item in the Cart!</p>}
            <ul>
               {cart.map(cartItem => (
                  <li key={cartItem.id}>
                     <div>
                        <strong>{cartItem.title}</strong> - ${cartItem.price} (
                        {cartItem.quantity})
                     </div>
                     <div>
                        <button
                           onClick={context.removeProductFromCart.bind(
                              this,
                              cartItem.id
                           )}
                        >
                           Remove from Cart
                        </button>
                     </div>
                  </li>
               ))}
            </ul>
         </main>
      </div>
   )
}

export default CartPage;
