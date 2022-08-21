import React from 'react'
import '../Styles/Header.css';

export default function () {
  return (
    <div className='Header-Box'>
      <nav className='Nav-Box'>
        <div className='Header-CityNav'>
        <img src="https://trello.com/1/cards/63026069b19dac14ccd35e15/attachments/63026731dd5b02125f4eb384/previews/63026732dd5b02125f4eb38b/download/Home_Icon.png"/>
        <a href="#">Home</a>
        </div>
        <div className='Header-CityNav'>
          <img src="https://trello.com/1/cards/63026069b19dac14ccd35e15/attachments/6302627444b2c31e0992a368/previews/6302627444b2c31e0992a373/download/Travel_Icon.png" alt="" />
          <a href="#">Cities</a>
        </div>
      </nav>
      <img className='Header-Logo' src="https://trello.com/1/cards/630039e10556b31d3ed9c200/attachments/630039eadcd1f17eb8449c4a/previews/630039ebdcd1f17eb8449c61/download/Icon.png" alt="Logo" />
      <div className='User'>
        <p>Log in</p>
        <p>Sing Up</p>
      </div>
    </div>
  )
}