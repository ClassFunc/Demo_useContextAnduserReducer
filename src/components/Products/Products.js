import React, {useEffect, useContext} from 'react'
import ShopContext from '../../context/shop-context'
import MainNavigation from '../MainNavigation/MainNavigation'
import './Products.css'

function ProductsPage(props) {
   const context = useContext(ShopContext)

   useEffect(() => {
      console.log('Product context: ', context)
      console.log('Product props: ', props)
   }, [])

   return (
      <div>
         <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
               return count + curItem.quantity;
            }, 0)}
            path={props.match.path}
         />
         <main className="products">
            <ul>
               {context.products.map(product => (
                  <li key={product.id}>
                     <div>
                        <strong>{product.title}</strong> - ${product.price}
                     </div>
                     <div>
                        <button
                           onClick={context.addProductToCart.bind(this, product)}
                        >
                           Add to Cart
                        </button>
                     </div>
                  </li>
               ))}
            </ul>
         </main>
      </div>
   )
}

export default ProductsPage;
