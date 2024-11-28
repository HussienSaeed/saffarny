import React, { useEffect } from 'react'
import './Portfolio.css'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import image from '../../assets/image.jpeg'

import Aos from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='portfolio section container' id='about'>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos='fade-up'>Why Should You Choose Us</h3>
            <p data-aos='fade-up'>We have extinsive knowledge and experience in the travel industry.</p>
          </div>
          <div className="grid">
            <div className="singlePortfolio flex" data-aos='fade-up'>
              <div className="iconDiv" >
                <img src={icon1} alt="" />
              </div>
              <div className="infor" >
                <h4 >Safety and support</h4>
                <p >Our top priority is the safety and well-being of our clients. We maintain high safety standards and have emegency support available during the trip.</p>
              </div>


            </div>
            <div className="singlePortfolio flex" data-aos='fade-up'>
              <div className="iconDiv" >
                <img src={icon2} alt="" />
              </div>
              <div className="infor" >
                <h4 >Diverse Range Of Destinations</h4>
                <p >Whether it's a domestic tour or an international adventure, we cover a wide range of destinations to cater to different interests and preference.</p>
              </div>


            </div>
            <div className="singlePortfolio flex" data-aos='fade-up'>
              <div className="iconDiv"  >
                <img src={icon3} alt="" />
              </div>
              <div className="infor">
                <h4 >24/7 Customer Support</h4>
                <p >Our dedicated customer support team is available round the clock to address any queries or concerns before, during, and after the trip.</p>
              </div>


            </div>
          </div>
        </div>
        <div className="rightContent" data-aos='fade-up'>
        <img src={image} alt="Image" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
