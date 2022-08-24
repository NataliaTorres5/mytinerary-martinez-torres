import React from 'react';
import '../Styles/Hero.css';
import CallToAction from './CallToAction';

export default function Hero() {
        return (
                <div className='Hero-Box'>
                        <img src="../icons/WelcomeIntro.png" alt="" />
                        <p>Taking you wherever your heart wants</p>
                        <CallToAction linkTo='cities' buttonAction='Check it out!' />

                </div>
        )
}
