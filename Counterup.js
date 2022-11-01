import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Counterup () {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <>
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
        <div className='counter row '>
               
               <div className='col-lg-3 d-flex align-items-center justify-content-around'>
               <h1 className='red'>{counterOn &&<CountUp start={0} end={26} duration={3} delay={0}/>}</h1><p className='az text-left'>Years Of Experience</p>
               <div className='vl'></div>
               </div>
               <div className='col-lg-3 d-flex align-items-center justify-content-around'>
               <h1 className='red'>{counterOn &&<CountUp start={0} end={271} duration={3} delay={0}/>}</h1><p className='az text-left'>Cyber Security Experts</p>
               <div className='vl'></div>
               </div>
               <div className='col-lg-3 d-flex align-items-center justify-content-around'>
               <h1 className='red'>{counterOn &&<CountUp start={0} end={85} duration={3} delay={0}/>}%</h1><p className='az text-left px-1'>Costumer Satisfaction Rate</p>
               <div className='vl'></div>
               </div>
               <div className='col-lg-3 d-flex align-items-center justify-content-around'>
               <h1 className='red'>{counterOn &&<CountUp start={0} end={2} duration={3} delay={0}/>}.7K</h1><p className='az text-left px-1'>Costumers Served Globally</p>
               </div>
               
        </div>
            
        </ScrollTrigger>
        </>
    )
}
export default Counterup;