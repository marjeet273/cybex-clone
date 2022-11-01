import React from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Routes, Route, Link } from "react-router-dom";
 function Owlauto2 () {
    return (
          <>
        <div className='py-4'>
            <div className='conatiner-fluid' >      

               <div className="row title" style={{marginBottom: "20px"}} ></div> 
              
                      
            </div>  

          <div className='container'>   

          <OwlCarousel items={2} margin={30} autoplay ={true} loop={true} autoplayTimeout={3000} autoplaySpeed={3000}>  

          <div className='single-solutions'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6'>
               <div className='solutions-image'><img src='assets/img/solutions-1.jpg'/></div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='solutions-content'>
          <h5 className='tt'>Abend Network Security</h5>
          <p className='aa py-3'>Top of the line data analysis with systems profile management development.</p>
          <Link to='#'>View Case Study <i class="red1 fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
          </div>
          </div>

          <div className='single-solutions'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6'>
               <div className='solutions-image'><img src='assets/img/solutions-2.jpg'/></div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='solutions-content'>
          <h5 className='tt'>Cyber Security</h5>
          <p className='aa py-3'>Top of the line data analysis with systems profile management and more.</p>
          <Link to='#'>View Case Study <i class="red1 fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
          </div>
          </div>

          
           
          </OwlCarousel> 
         </div> 

         <img className='po py-5' src='assets/img/solutions-shape-2.png'/>
      </div>
          </>
    )
 };
 export default Owlauto2;