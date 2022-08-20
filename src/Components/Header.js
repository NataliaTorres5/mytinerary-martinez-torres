import React from 'react'
import '../Styles/Header.css';

export default function () {
  return (
    <div className='Header-Box'>
        <img className='Header-Logo' src="https://trello.com/1/cards/630039e10556b31d3ed9c200/attachments/630039eadcd1f17eb8449c4a/previews/630039ebdcd1f17eb8449c61/download/Icon.png" alt="Logo"/>
        <nav className='Nav-Box'>
          <a href="#">Home</a>
          <a href="#">Cities</a>
          
        </nav>
    </div>
  )
}