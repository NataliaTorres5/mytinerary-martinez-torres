import React from 'react'
import '../Styles/Header.css';

export default function () {
  return (
    <div className='Header-Box'>
        <img className='Header-Logo' src="https://trello.com/1/cards/62feb8a662d255213e0b4f87/attachments/630023802d49893c21b2092b/previews/630023812d49893c21b20936/download/My_Tinerary_Logo_full.png" alt="Logo"/>
        <nav className='Nav-Box'>
          <a href="#">Home</a>
          <a href="#">Cities</a>
          
        </nav>
    </div>
  )
}