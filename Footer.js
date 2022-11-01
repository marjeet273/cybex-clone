
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Footer (){
    return(
        <>
        <div className='footer'>
        <div className='banlast row d-flex align-items-center'>
            <h3 className='ab px-5 text-center'>Ready To Get Free Consultations <br/> For Any Kind Of Solutions</h3>
            <div className='px-5 mb'><button type="button" class="fs-5 dd mt-5 btn btn-lg">Get a Quote</button></div>

        </div>
        <div>
            <div className='row d-flex justify-content-evenly'>
                <div className='col-lg-3 logo'>
                <img src='https://templates.hibotheme.com/cybex/default/assets/images/logo.png'/>
                <div className='py-3'><h5 className='aa'>Integrate local and<br/> cloud resources,<br/> protect user traffic<br/> 
                    and endpoints,<br/> and create custom,<br/> scalable network.</h5>
                </div>
                <div className='row '>
                <div className='circle3'><Link to='#'><i className="acenter2 fa-brands fa-facebook fa-xl"></i></Link></div><div className='circle3'><Link to='#'><i className="acenter2 fa-brands fa-twitch fa-xl"></i></Link></div><div className='circle3'><Link to='#'><i className="acenter2 fa-brands fa-instagram fa-xl"></i></Link></div>
                </div>
                </div>

                <div className='col-lg-2'>
                    <div><h4 className='aa logo'>Company</h4></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>About Us</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Careers</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Business<br/> Contact</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Our Blog</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Terms & Conditions</h6></Link></div>
                </div>

                <div className='col-lg-2'>
                    <div><h4 className='aa logo'>Resources</h4></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Application Security</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Cloud Security</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Infrastructure<br/> Contact</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Threat Hunter</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Disaster Planning</h6></Link></div>
                </div>

                <div className='col-lg-2'>
                    <div><h4 className='aa logo'>Qucik Links</h4></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Services</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Contact</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>FAQ</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Cyber Security</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Our Team</h6></Link></div>
                </div>

                <div className='col-lg-2'>
                    <div><h4 className='aa logo'>Contact Us</h4></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'><span className="aa">Address:</span> 2750 Quadra Street Victoria, Canada.</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Email: hello@cybex.com</h6></Link></div>
                    <div><Link to='#' style={{textDecoration:'none'}}><h6 className='aaa'>Phone: +1-485-456-0102</h6></Link></div>
                </div>
            </div>
        </div>
        

        <div className='horizontal'></div>
        <div className='tt text-center py-5'><i class="fa-regular fa-copyright"></i> Marjeet Gharti 2022</div>

        </div>

        </>
    )
};
export default Footer;