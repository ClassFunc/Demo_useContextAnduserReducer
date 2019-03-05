import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';

const mainNavigation = props => {
  const {path, cartItemNumber} = props
  return (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink
             style={{
               backgroundColor: path === '/' ? '#FFFFFF' : '',
               color: path === '/' ? '#00179b' : '#FFFFFF'
             }}
             to="/"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
             style={{
               backgroundColor: path === '/cart' ? '#FFFFFF' : '',
               color: path === '/cart' ? '#00179b' : '#FFFFFF'
             }}
             to="/cart"
          >
            Cart ({cartItemNumber})
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)}

export default mainNavigation;
