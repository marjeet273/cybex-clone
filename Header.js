import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Link } from "react-router-dom";
import Contact from './Contact';
 


function Header () {
      return(
       <>
       <div className='head'>
        <div className='row pad'>
        <div className="col-lg-3 d-flex align-items-center justify-content-center">
        <div>Welcome to Cybex. Need help? <Link to="/Contact">Contact Us</Link></div> 
        </div>
        <div className="col-lg-3 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-location-dot fa-xs"></i><div className='px-1'>Address: 2750 Quadra Street Victoria, Canada</div> 
        </div>
        <div className="col-lg-3 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-phone fa-xs"></i> <div className='px-1'>Contact: +44 587 154756</div>
        </div>
        <div className="col-lg-3 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-envelope fa-xs"></i> <div className='px-1'>Contact Email: cybex@gmail.com</div>
        </div>
        </div>
       
       </div>
       <Routes>
      
        <Route path="Contact" element={<Contact />} />
       </Routes>
       </>
    )
}
export default Header;