import React from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl.css'
function Owlauto () {  
         
      return (  
          <div className='py-4'>  
            <div class='container-fluid' >      
              <div className="row title" style={{marginBottom: "20px"}} ></div>      
            </div>  
      <div class='container' >   
    <OwlCarousel items={7} margin={65} loop={true} autoplay={true} autoplayTimeout={2000} autoplaySpeed={2000}>  
       <div><img  className="imga" src= {'assets/img/partner-1.png'}/></div>  
       <div><img  className="imga" src= {'assets/img/partner-2.png'}/></div>  
       <div><img  className="imga" src= {'assets/img/partner-3.png'}/></div>  
       <div><img  className="imga" src= {'assets/img/partner-4.png'}/></div>  
       <div><img className="imga" src= {'assets/img/partner-5.png'}/></div>  
       <div><img className="imga" src= {'assets/img/partner-6.png'}/></div>  
       <div><img className="imga" src= {'assets/img/partner-7.png'}/></div> 
       <div><img className="imga" src= {'assets/img/partner-5.png'}/></div>
       <div><img  className="imga" src= {'assets/img/partner-3.png'}/></div>
       <div><img className="imga" src= {'assets/img/partner-6.png'}/></div>  
       <div><img className="imga" src= {'assets/img/partner-7.png'}/></div> 
       <div><img className="imga" src= {'assets/img/partner-5.png'}/></div>
       <div><img  className="imga" src= {'assets/img/partner-3.png'}/></div> 
       <div><img  className="imga" src= {'assets/img/partner-2.png'}/></div>  
       <div><img  className="imga" src= {'assets/img/partner-3.png'}/></div>  
       <div><img  className="imga" src= {'assets/img/partner-4.png'}/></div>  
       <div><img className="imga" src= {'assets/img/partner-5.png'}/></div>    
  </OwlCarousel>  
  </div>  
  </div>  
      )  
    }  
 
    

export default Owlauto;  