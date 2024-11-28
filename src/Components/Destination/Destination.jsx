import React, { useEffect } from 'react'
import './Destination.css'
import giftun from '../../assets/giftun.jpg';
import Seychelles from '../../assets/Seychelles.jpg';
import bora from '../../assets/bora.jpg';
import bali from '../../assets/bali.jpg';
import maui from '../../assets/Seychelles.jpg';
import santorini from '../../assets/santorini.jpg';
import capri from '../../assets/capri.jpg';
import fiji from '../../assets/fiji.jpg';

import { MdLocationOn } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

import Aos from 'aos';
import 'aos/dist/aos.css';


const destinations = [
  {
    id: 1,
    image: Seychelles,
    _name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.6
  },
  {
    id: 2,
    image: bora,
    _name: 'Bora Bora Island',
    location: 'Polynesia',
    rating: 4.7
  },
  {
    id: 3,
    image: santorini,
    _name: 'Santorini Island',
    location: 'Greece',
    rating: 4.8
  },
  {
    id: 4,
    image: bali,
    _name: 'Bali Island',
    location: 'Indonesia',
    rating: 4.5
  },
  {
    id: 5,
    image: maui,
    _name: 'Maui Island',
    location: 'Hawaii, USA',
    rating: 4.3
  },
  {
    id: 6,
    image: capri,
    _name: 'Capri Island',
    location: 'Italy',
    rating: 4.6
  },
  {
    id: 7,
    image: fiji,
    _name: 'Fiju Island',
    location: 'Italy',
    rating: 4.4
  },
  {
    id: 8,
    image: giftun,
    _name: 'Giftun Island',
    location: 'Egypt',
    rating: 4.9
  },
]
function Destination() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='destination section container' id='destination'>
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos='fade-up'>
            EXPLORE NOW
          </span>
          <h3 data-aos='fade-up'>Find Your Dream Destination</h3>
          <p data-aos='fade-up'>Fill in the fields below to find the best spot for your next tour</p>
        </div>
        <div className="searchField grid" >
          <div className="inputField flex" data-aos='fade-up'>
            <MdLocationOn className='icon' />
            <input type="text" placeholder='Location' name="" id="" />
          </div>
          <div className="inputField flex" data-aos='fade-up'>
            <FaCreditCard className='icon' />
            <input type="text" placeholder='Budget' name="" id="" />
          </div>
          <div className="inputField flex" data-aos='fade-up'>
            <FaCalendarAlt className='icon' />
            <input type="text" placeholder='Date' name="" id="" />
          </div>
          <button className='btn flex' data-aos='fade-up'>
            <BiSearchAlt className='icon' />
            Search
          </button>
        </div>
        <div className="secMenu" >
          <ul className="flex" data-aos='fade-up'>
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid" data-aos='fade-up'>
          {
            destinations.map((destination) => {
              return (
                <div className="singleDestination" key={destination.id}>
                  <div className="imgDiv">
                    <img src={destination.image} alt="Destination Image" />
                    <div className="destInfo flex">
                      <div className="text">
                        <span className="name">{destination._name}</span>
                        <p className='flex'>
                          <TiLocation className='icon' />
                          {destination.location}
                        </p>
                      </div>
                      <span className="rating">
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Destination
