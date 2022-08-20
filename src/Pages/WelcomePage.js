import React from 'react'
import WelcomeVideo from "../Media/WelcomeVideo.mp4"
import Hero from "../Components/Hero.js"

import '../Styles/WelcomePage.css';


export default function WelcomePage () {
    return (
        <div className='WMain'>
            <video src={WelcomeVideo} autoPlay loop muted/>
            { <Hero /> }

        
        </div>
    )
}
