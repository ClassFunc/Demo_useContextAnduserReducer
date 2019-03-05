import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProductsPage from './components/Products/Products'
import CartPage from './components/Cart/Cart'
import './App.css'

class App extends Component {
   render() {
      console.log('App js props: ', this.props)
      return (
         <BrowserRouter>
            <Switch>
               <Route path="/" component={ProductsPage} exact/>
               <Route path="/cart" component={CartPage} exact/>
            </Switch>
         </BrowserRouter>
      )
   }
}

export default App
