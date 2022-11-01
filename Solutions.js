import React from "react";
import ReactDOM from "react-dom/client";

import { Routes, Route, Link } from "react-router-dom";

function Solutions () {
    return (
        <>
        <div className='solutions'>
        
        <h5 className='ac text-center'>OUR SECURITY <span className='bb'>SOLUTIONS</span></h5>
        <h3 className='ab text-center'>Our Unique, Best Approach To <br/>Systems Implementation</h3>
        <p className='az text-center'>Integrate local and cloud resources, protect user traffic 
        and endpoints, and <br/> create custom, scalable network.</p>
        <div className='row d-flex justify-content-around py-5'>
            <div className='card3 col-lg-4 px-3'>
                <div className='circle2'><img className='acenter' src={'assets/img/icon-3.svg'}/></div>
                <h3 className='aa'>Application Security</h3>
                <p className='tt'>Lorem ipsum dolor sit amet, consectetur elit. Dis orci massa molestie sem 
                    ultrices. Id neque proin sed dictumst augue.</p>
                <Link to='#' className='aa'>Read More <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className='card3 col-lg-4'>
                <div className='circle2'><img className='acenter' src={'assets/img/icon-4.svg'}/></div>
                <h3 className='aa'>Network Security</h3>
                <p className='tt'>Lorem ipsum dolor sit amet, consectetur elit.
                 Dis orci massa molestie sem ultrices. Id neque proin sed dictumst augue.</p>
                 <Link to='#' className='aa'>Read More <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className='card3 col-lg-4'>
            <div className='circle2'><img className='acenter' src={'assets/img/icon-5.svg'}/></div>
                <h3 className='aa'>Cloud-native Security</h3>
                <p className='tt'>Lorem ipsum dolor sit amet, consectetur elit.
                 Dis orci massa molestie sem ultrices. Id neque proin sed dictumst augue.</p>
                 <Link to='#' className='aa'>Read More <i class="fa-solid fa-arrow-right"></i></Link>

            </div>
        </div>
        <img className='po' src='https://templates.hibotheme.com/cybex/default/assets/images/banner/banner-shape-3.png'/>
        <div className='row d-flex justify-content-around py-5'>
            <div className='card3 col-lg-4 px-3'>
                <div className='circle2'><img className='acenter' src={'assets/img/icon-6.svg'}/></div>
                <h3 className='aa'>Data Security</h3>
                <p className='tt'>Lorem ipsum dolor sit amet, consectetur elit. Dis orci massa molestie sem 
                    ultrices. Id neque proin sed dictumst augue.</p>
                <Link to='#' className='aa'>Read More <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className='card3 col-lg-4'>
                <div className='circle2'><img className='acenter' src={'assets/img/icon-7.svg'}/></div>
                <h3 className='aa'>Security Automation</h3>
                <p className='tt'>Lorem ipsum dolor sit amet, consectetur elit.
                 Dis orci massa molestie sem ultrices. Id neque proin sed dictumst augue.</p>
                 <Link to='#' className='aa'>Read More <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className='card3 col-lg-4'>
            <div className='circle2'><img className='acenter' src={'assets/img/icon-8.svg'}/></div>
                <h3 className='aa'>Structure Security</h3>
                <p className='tt'>Lorem ipsum dolor sit amet, consectetur elit.
                 Dis orci massa molestie sem ultrices. Id neque proin sed dictumst augue.</p>
                 <Link to='#' className='aa'>Read More <i class="fa-solid fa-arrow-right"></i></Link>

            </div>
        </div>




        </div>
        </>
    )
};
export default Solutions;