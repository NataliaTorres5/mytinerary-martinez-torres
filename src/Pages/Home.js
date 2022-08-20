import React from 'react'
import WelcomeVideo from "../Media/WelcomeVideo.mp4"
import Hero from "../Components/Hero.js"

import '../Styles/WelcomePage.css';

import WebsiteLayout from '../Layouts/WebsiteLayout.js'

export default function Home() {
  return (
    <WebsiteLayout>

<div className='WMain'>
            <video src={WelcomeVideo} autoPlay loop muted/>
            { <Hero /> }

        
  </div>

    </WebsiteLayout>
  )
}
