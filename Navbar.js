import React from 'react';
import ReactDOM from 'react-dom/client'
import { Routes, Route, Link } from "react-router-dom"
import Search from './Search'


function Navbar(){
    return(
<>
<div className="sticky-sm-top">
<nav className="navz navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">
        <img src='https://templates.hibotheme.com/cybex/default/assets/images/logo.png'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
      <li className="nav-item dropdown px-1">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Home One</a></li>
            <li><a className="dropdown-item" href="#">Home Two</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Home Three</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown px-1">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">About Us</a></li>
            <li><a className="dropdown-item" href="#">Pricing</a></li>
            <li><a className="dropdown-item" href="#">Case Study</a></li>
            <li><a className="dropdown-item" href="#">Team</a></li>
            <li><a className="dropdown-item" href="#">FAQ</a></li>
            <li><a className="dropdown-item" href="#">Privacy Policy</a></li>
            <li><a className="dropdown-item" href="#">Terms and Condition</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Review</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown px-1">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Services Type 1</a></li>
            <li><a className="dropdown-item" href="#">Services Type 2</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Services Type 3</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown px-1">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Products</a></li>
            <li><a className="dropdown-item" href="#">Cart</a></li>
            <li><a className="dropdown-item" href="#">Product Details</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Check Out</a></li>
          </ul>
        </li>
       
        <li className="nav-item dropdown px-1">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">News</a></li>
            <li><a className="dropdown-item" href="#">Top Headlines</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Archive</a></li>
          </ul>
        </li>
        <li className="nav-item px-1">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
       
      </ul>
      <div className='vl'></div>
      <div className='option px-3'><i class="option fa-solid fa-cart-shopping"></i></div>
    </div>
    <div className='sbutton'><button type="button" class="btn"><Link to="/Search"><i class="option fa-solid fa-magnifying-glass"></i></Link></button>
   
    </div>
    <button type="button" className="gs btn btn-outline-danger ms-4">Get Started Now</button>
  </div>
</nav>
</div>
<Routes>
      
      <Route path="/Search" element={<Search />} />
     </Routes>
</>
    )
}
export default Navbar;