import React from 'react'
import CallToAction from '../Components/CallToAction'
import MyTinerariesUser from '../Components/MyTinerariesUser.js'

export default function MyTineraries() {

  return (
    <div>
      <MyTinerariesUser/>
      <CallToAction className='returnbtn' linkTo='/cities' buttonAction='Return' />
    </div>
    
  )
}
