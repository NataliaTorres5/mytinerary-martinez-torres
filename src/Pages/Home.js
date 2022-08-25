import React from 'react'
import WelcomeVideo from "../Media/WelcomeVideo.mp4"
import Hero from "../Components/Hero.js"
import '../Styles/Home.css';

import CityCarousel from '../Components/CityCarousel';


export default function Home() {
  return (
    <>
      <div className='WMain'>
        <video src={WelcomeVideo} autoPlay loop muted />
        {<Hero />}
        </div>
        <div className='Carousel-Container'>
          <div className='Popular'>
            <img src="../icons/Popular_my_Tinerary.png" alt="popular"/>
          </div>
          {<CityCarousel />}
        </div>
    </>
  )
}
