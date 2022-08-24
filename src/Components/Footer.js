import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Link as LinkRouter } from 'react-router-dom';
import '../Styles/Footer.css';


const fPages = [
  { url: '/icons/homel.png', name: 'Home', to: '/', id: 'nav1' },
  { url: '/icons/planel.png', name: 'Cities', to: '/cities', id: 'nav2' },
  { url: '/icons/passportd.png', name: 'New City', to: '/newcity', id: 'nav3' }
]

const link = (page) =>
  <LinkRouter className='fRouter' key={page.id} to={page.to}>{page.name} <img className='fImg' width={45} src={page.url} alt={page.id}></img> </LinkRouter>
export default function Footer() {

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='Footer-Box'>
      <div className='Footer1'>
        <div className='Team'>
          <img src="../icons/xiaomei.png" alt="panda" />
          <h2 className='Footer-Text'>Panda Xiao Mei - Cohort 31</h2>
        </div>
        <div className='fLinks'>
          <div className='footernav'> 
          {fPages.map(link)}
          </div>
          <button onClick={scrollUp} >Go UP!</button>
        </div>
        <div className='Footer-Icons'>
          <img src="../icons/Instagram.png" alt="Instagram" />
          <img src="../icons/Facebook.png" alt="Facebook" />
          <img src="../icons/Whatsapp.png" alt="Whatsapp" />
          <img src="../icons/mail-icon.png" alt="Mail" />
        </div>
      </div>
      <div className='Contacts' >
        <div className='Where'>
        <h3>You can find Us in</h3>
        <div className='flags'>
          <img src="../countries/COL.png" alt=""/>
          <img src="../countries/ARG.png" alt=""/>
          <img src="../countries/CHL.png" alt=""/>
          <img src="../countries/UE.png" alt=""/>
          <img src="../countries/CAN.png" alt=""/>
          <img src="../countries/USA.png" alt=""/>
        </div>
        </div>
        <br/>
        <div className='address'>
          <div className='addressp'>
          <p>Adress: 153 Terrace Dr, San Francisco, CA 94127, EE. UU.</p>
          <a href="tel:+34000000000">Call Us: +34000000000</a>
          <a href = "mailto: client@tinerary.com">Send us an Email: client@tinerary.com</a>
          </div>
          <div className='map'>
          <img src="../countries/map.png" alt="map"/>
          </div>
        </div>
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