import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, Link } from "react-router-dom";
import Contact from './Contact';
function Hero (){
    return (
    <>
   
      <div className='hero'>
          <div className='row'>
         
            <div className='col-lg-6 px-5 py-5 mt-4'>
              <img className='px-5'src='https://templates.hibotheme.com/cybex/default/assets/images/banner/banner-shape-1.png'/>
              <h5 className='aa'>CYBER <span className='bb'>ATTACK PROTECTION</span></h5>
              <h1 className='cc'>Powerful Security <br/>Systems To Protect <br/>Your Business</h1>
              <p className='aa py-3'>Integrate local and cloud resources, protect user traffic
                 and endpoints and create a custom, scalable network.</p>
                  <div className='row d-flex justify-content-around'>
                   <div className='col-lg-2 mt-3'><button type="button" class="dd mt-5 btn btn-lg">Request Free Demo</button>
                   </div>
                   <Link to="/Contact" className="box col-lg-2 px-4 py-3 mt-5"><i class="tt py-4 px-2 fa-lg fa-solid fa-play"><Link to="/Contact"></Link></i>
                   </Link>
                   <div className='ee col-lg-2 mt-5 py-4'><p>Watch Intro Video</p></div>
                  </div>
            </div>
            
            
            <div className='heroim col-lg-6'>
              <img className='mt-5 py-3'src='https://templates.hibotheme.com/cybex/default/assets/images/banner/banner-shape-2.png'/>
              <img src='https://templates.hibotheme.com/cybex/default/assets/images/banner/banner-img-1.png' width='640px'/>  

            </div>
          </div>
         
            <img className='po px-5'src='https://templates.hibotheme.com/cybex/default/assets/images/banner/banner-shape-3.png'/>
        <div className='row d-flex justify-content-around py-5'>
            <div className='cards col-lg-3'>
              <h1>01</h1>
              <h3 className='py-2'>Network Security</h3>
              <p className='py-2'>Integrate Local And Cloud Resources, User Traffic And Endpoints.</p>
            </div>
            <div className='cards col-lg-3'>
              <h1>02</h1>
              <h3 className='py-3'>DDOS Protection</h3>
              <p className='py-3'>Integrate Local And Cloud Resources, User Traffic And Endpoints.</p>
            </div>
            <div className='cards col-lg-3'>
              <h1>03</h1>
              <h3 className='py-3'>Data Privacy</h3>
              <p className='py-3'>Integrate Local And Cloud Resources, User Traffic And Endpoints.</p> 
            </div>
            <div className='cards col-lg-3'>
              <h1>04</h1>
              <h3 className='py-2'>Security Management</h3>
              <p className='py-2'>Integrate Local And Cloud Resources, User Traffic And Endpoints.</p>
            </div>
          
        </div>
               <div><img src='https://templates.hibotheme.com/cybex/default/assets/images/partner/partner-shape-1.png'/>
                    <img className='po' src='https://templates.hibotheme.com/cybex/default/assets/images/banner/banner-shape-4.png'/>
               </div>
          
    </div> 
         
          <Routes>
           <Route path="Contact" element={<Contact />} />
          </Routes>
         
      </>
    )
}
export default Hero;