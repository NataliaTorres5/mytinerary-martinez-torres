import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import '../Styles/Header.css';

const hPages = [
  {/* url:'/icons/Home_Icon.png', */name:'Home', to:'/', id:'nav1'},
  {/* url:'/icons/Travel Icon.png', */name:'Cities', to:'/cities', id:'nav2'},
  // {name:'Sing Up', to:'/singup', id:'nav3'},
  // {name:'Log In', to:'/login', id:'nav4'}
]

const link = (page) => 
<LinkRouter key={page.id} to={page.to}>{page.name}</LinkRouter>


export default function Header() {
  return (
    <div className='Header-Box'>
      <div>
        {hPages.map(link)}
      </div>

      <img className='Header-Logo' src="../icons/Icon.png" alt="Logo" />

      <div className='User-box'>
    
      </div>
      
    </div>
  )
}
