import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../Styles/Footer.css';

export default function () {

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='Footer-Box'>
      <div className='Team'>
      <img src="https://trello.com/1/cards/6302551ed59f6128266eec5d/attachments/6302552bd67650272769f354/previews/6302552bd67650272769f35e/download/xiaomei.png" alt="" />
        <p className='Footer-Text'>Panda Xiao Mei - Cohort 31</p>
        <button onClick={scrollUp} >TOP</button>
      </div>
        <div className='Footer-Icons'>
            <img src="https://trello.com/1/cards/6302fbe2a1cacc1388c0b1dd/attachments/6302fbec5b307d371ef3ec2a/previews/6302fbed5b307d371ef3ec34/download/Instagram.png" alt="Instagram"/>
            <img src="https://trello.com/1/cards/6302fbe2a1cacc1388c0b1dd/attachments/6303bfaff02219265670ea30/previews/6303bfb0f02219265670ea4b/download/Facebook.png" alt="Facebook"/>
            <img src="https://trello.com/1/cards/6302fbe2a1cacc1388c0b1dd/attachments/6303bfc1d2e1772a4bd47034/previews/6303bfc2d2e1772a4bd4705a/download/Whatsapp.png" alt="Whatsapp"/>
            <img src="https://trello.com/1/cards/6302fbe2a1cacc1388c0b1dd/attachments/6302fc09c4cc5a64db7d739e/previews/6302fc09c4cc5a64db7d73b1/download/mail-icon.png" alt="Mail"/>
        </div>
    </div>
  )
}







/*{
  return (
    <div className='Footer-Box'>
      <div className='Team'>
      <img src="../icons/xiaomei.png" alt="" />
        <p className='Footer-Text'>Panda Xiao Mei - Cohort 31</p>
      </div>
        <div className='Footer-Icons'>
            <img src="../icons/Instagram.png" alt="Instagram"/>
            <img src="../icons/Facebook.png" alt="Facebook"/>
            <img src="../icons/Whatsapp.png" alt="Whatsapp"/>
            <img src="../icons/mail-icon.png" alt="Mail"/>
        </div>
    </div>
  )
}*/