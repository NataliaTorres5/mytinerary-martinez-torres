import React from 'react'
import '../Styles/UnderConstruction.css';
import CallToAction from '../Components/CallToAction'


export default function UnderConstruction() {
  return (
    <div className='underC-Box'>
      <div className='found'>
      <img src="../icons/notfound.png" alt="notfound"/>
      </div>
      <div className='unbtn'>
      <CallToAction linkTo='/' buttonAction='Return' />
      </div>
      <div className='sadpanda'>
      <img src="../icons/sadxiaomei.png" alt="sadpanda"/>
      </div>
      
    </div>
  ) 
  }

