import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

// Icons
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

function Navbar() {

  const [navBar , setNavBar] = useState("menu")
  const showNavBar = () => {
    setNavBar("menu showNavBar")
  }
  const hideNavBar = () => {
    setNavBar("menu ")
  }
  return (
    <div className='navBar'>
      <div className="logoDiv">
        <MdOutlineTravelExplore className='icon' />
        <span className='first'>SAF-<span className='seconde'>FARNY</span> </span>
      </div>
      <div className={navBar}>
      <ul>
        <li h className='navList'>
            <a href="/">Home</a>
        </li>
        <li h className='navList'>
            <a href="#destination">Destination</a>
        </li>
        <li className='navList nav-item'>
            <a href="#about">About Us</a>
        </li>
        <li className='navList nav-item'>
            <a href="#reviews">Reviews</a>
        </li>
        <li className='navList nav-item'>
            <a href="#questions">Questions</a>
        </li>
        </ul>
      {/*Icon to remove Navbar */}
        <AiFillCloseCircle className='icon closeIcon' onClick={hideNavBar}/>
      </div>
      <button className="contactBtn btn" >
        <a href="tel:2001024359860">Contact Us!</a>
      </button>
      {/*Icon to toggle Navbar */}
      <CgMenuGridO className='icon menuIcon' onClick={showNavBar}/>

      
    </div>
  )
}
export default Navbar
