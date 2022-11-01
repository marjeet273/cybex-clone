import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.scss'
import Header from './Header.js'
import Navbar from './Navbar.js'
import Hero from './Hero.js'
import Trust from './Trust.js'
import Solutions from './Solutions';
import Choose from './Choose';
import Threat from './Threat.js'
import ScrollToTop from "react-scroll-to-top";
import Pricing from './Pricing';
import Footer from './Footer';
function Website () {
    return(
        <>
        <Header/>
        <Navbar/>
        <ScrollToTop/>
        <Hero/>
        <Trust/>
        <Solutions/>
        <Choose/>
        <Threat/>
        <Pricing/>
        <Footer/>
        </>
        
        )
};
export default Website;