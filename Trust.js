import React from 'react'
import ReactDOM from 'react-dom/client'
import Owlauto from './Owlauto';
import Counterup from './Counterup';

function Trust (){
    return(
        <>
        <div className='trust'>
            
              <h5 className='ac text-center'>TRUSTED <span className='bb'>BY COSTUMERS</span></h5>
              <h3 className='ab text-center'>Trusted Over 2300 + <br/>Companies In The World</h3>
              <p className='az text-center'>Integrate local and cloud resources, protect traffic
               <br/> and endpoints, scalable network.Yes I<br/>Integrate local and cloud 
               Integrate local endpoints.</p>
               
              <div className='oa'><Owlauto/></div>
            <div className='row px-3'>
                <div className='col-lg-6'>
                  <img className='about'src={'assets/img/about-img-1.jpg'}/>
                </div>
                <div className='col-lg-6 px-5'>
                  <div className='topt'>
                   <h5 className='ac'>ABOUT <span className='bb'>OUR COMPANY</span></h5>
                   <h3 className='ab py-3'>The Perfect Solution for all <br/>Protection Questions</h3>
                   <p className='az py-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc rhoncus, egestas amet, senectus Semper sit tincidunt bibendum libero. Faucibus
                     yes ok no For sure hi ok ir nowuw dkfkpomb oh yeah Lorem
                     lorem ipsum jw a dkalomn da awe some one.
                     </p>
                     </div>
                    <div className='acards'>
                      <div className='circle'><img src={'assets/img/icon-1.svg'}/></div>
                 
                      
                      <h3 className='atext'>Highly Professional Members</h3>
                      <p className='btext'>Integrate local and cloud resources,
                      user <br/> traffic and cloud resources, user traffic and <br/>endpoints.</p>
                      
                    </div>
                    <div className='acards mt-4'>
                       <div className='circle'><img src={'assets/img/icon-2.svg'}/></div>
                       
                       <h3 className='atextb'>Infrastructure Integration<br/>Technology</h3>
                       <p className='btextb'>Integrate local and cloud resources,
                       user <br/> traffic  and cloud resources, user traffic and <br/> endpoints.</p>
                    
                    </div>
                    <button type="button" class="fs-5 dd mt-5 btn btn-lg">Learn More</button>

                </div>
            </div>
           <div className='cu'><Counterup/></div>
           <img className='bo' src='assets/img/services-shape-1.png'/> 
           <img className='shape'src='assets/img/services-shape-2.png'/>
        </div>
        </>
    )
}
export default Trust;
