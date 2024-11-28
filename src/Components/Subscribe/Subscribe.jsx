import React, { useEffect } from 'react'
import './Subscribe.css'
import person from '../../assets/person.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
function Subscribe() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={person} alt="" data-aos='fade-down' />
        <div className="textDiv" >
          <h4 data-aos='fade-up'>Best Way To Start Your Journey!</h4>
          <p data-aos='fade-up'>We offer personalized itineraries tailored to individual preference and interests.</p>
          <button className='btn'>Start Here</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
