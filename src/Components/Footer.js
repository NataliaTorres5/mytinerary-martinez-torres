import React from 'react'
import '../Styles/Footer.css';

export default function () {
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
}