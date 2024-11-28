import React, { useEffect } from 'react';
import './Footer.css';
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

import Aos from 'aos';
import 'aos/dist/aos.css';

function Footer() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo" data-aos='fade-up'>
            <MdOutlineTravelExplore className='icon' />
            <span className='first'>SAF-<span className='seconde'>FARNY</span> </span>
          </div>
          <div className="socials flex" data-aos='fade-up'>
            <FaFacebookF className='icon' />
            <FaXTwitter className='icon' />
            <AiFillInstagram className='icon' />

          </div>
          </div>

          <div className="footerLinks"data-aos='fade-up'>
            <span className="linkTitle">
              Information
            </span>
            <li>  <a href="#">Home</a></li>
            <li> <a href="#">Explore</a></li>
            <li>  <a href="#">Travel</a></li>
            <li>   <a href="#">Blog</a></li>
          </div>
          <div className="footerLinks"data-aos='fade-up'>
            <span className="linkTitle">
              Helpful Links
            </span>
            <li>  <a href="#">Destination</a></li>
            <li> <a href="#">Support</a></li>
            <li>  <a href="#">Travel & Condition</a></li>
            <li>   <a href="#">Privacy</a></li>
          </div>
        <div className="footerLinks" data-aos='fade-up'>
            <span className="linkTitle">
             Contact Details
            </span>
            <span className="phone">
             +20 1024359860
            </span>
            <span className="email">
             hussiensaeed785@gmail.com
            </span>
          
          </div>
      </div>
    </div>
  )
}

export default Footer
