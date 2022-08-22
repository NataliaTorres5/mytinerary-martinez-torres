import React from 'react'
import WelcomeVideo from "../Media/WelcomeVideo.mp4"
import Hero from "../Components/Hero.js"
import '../Styles/Home.css';
import WebsiteLayout from '../Layouts/WebsiteLayout.js'
import CityCarousel from '../Components/CityCarousel';


export default function Home() {
  return (
    <WebsiteLayout>
      <div className='WMain'>
        <video src={WelcomeVideo} autoPlay loop muted />
        {<Hero />}
        </div>
        <div className='Carousel-Container'>
          <h2>Popular My Tinerary</h2>
          {<CityCarousel />}
        </div>
    </WebsiteLayout>
  )
}
