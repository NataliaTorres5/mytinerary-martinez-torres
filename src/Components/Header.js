import React from 'react'
import '../Styles/Header.css';
import {Link as LinkRouter} from 'react-router-dom'

function Header() {
  return(
    <div className='Header-container'>
      <LinkRouter to='/'>Home</LinkRouter>
      <LinkRouter to='cities'>Cities</LinkRouter>
    </div>
    
  )
}
export default Header


 /*export default function () {

  return (
   <div className='Header-Box'>
      <nav className='Nav-Box'>
        <div className='Header-CityNav'>
          <img src="https://trello.com/1/cards/63026069b19dac14ccd35e15/attachments/63026731dd5b02125f4eb384/previews/63026732dd5b02125f4eb38b/download/Home_Icon.png" />
          <a href="#">Home</a>
        </div>
        <div className='Header-CityNav'>
          <img src="https://trello.com/1/cards/63026069b19dac14ccd35e15/attachments/6302627444b2c31e0992a368/previews/6302627444b2c31e0992a373/download/Travel_Icon.png" alt="" />
          <a href="#">Cities</a>
        </div>
      </nav>

      <img className='Header-Logo' src="https://trello.com/1/cards/6303c7402c9fad32852f18fa/attachments/6303c75d68cbfc1b53c362e8/previews/6303c75e68cbfc1b53c3633f/download/Icon.png" alt="Logo" />

      <div className='User-box'>
        <div className='User'>
          <img src='https://trello.com/1/cards/6302fbe2a1cacc1388c0b1dd/attachments/6302fc1bfb38b23769e34220/previews/6302fc1bfb38b23769e34228/download/NotLogin.png' />
          <a href="#">Log in</a>
        </div>
        <div className='User'>
          <img src='https://trello.com/1/cards/6302fbe2a1cacc1388c0b1dd/attachments/6302fc1037fd5f6f769079c2/previews/6302fc1137fd5f6f769079d2/download/Booking.png' />
          <a href="#">Sing Up</a>
        </div>
      </div>
    </div> 
  )
}*/