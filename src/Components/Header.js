import axios from 'axios';
import apiURL from '../api'
import { useRef, useState, useEffect,} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { useSignOutUserMutation } from '../features/userAPI';
import { entry } from '../features/userLoggedSlice'

import '../Styles/Header.css';

const hPages = [
  { url: '/icons/homewhitel.png', name: 'Home', to: '/', id: 'nav1' },
  { url: '/icons/planewl.png', name: 'Cities', to: '/cities', id: 'nav2' },
  { url: '/icons/passport.png', name: 'New City', to: '/newcity', id: 'nav4' },
  { url: '/swhitef.png', name: 'Edit City', to: '/editcity', id: 'nav3' },
  { url: '/ticket.png', name: 'My Tineraries', to: '/mytineraries', id: 'nav5' }
]



export default function Header() {

  const dispatch = useDispatch()

  const logged = useSelector((state) => state.logged.loggedState) 

  console.log(logged)

  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState(false)
  const navigate = useNavigate()
  const menuIcon = useRef()


  const [signOutUser] = useSignOutUserMutation(email)

  const link = (page) => <LinkRouter className='hRouter' key={page.id} to={page.to}>{page.name} <img className='hImg' width={45} src={page.url} alt={page.id} /></LinkRouter>




  const  handleOpenMenu = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }



  /*useEffect(() => {
    document.addEventListener('click', handleOpenMenu)
    return () => {
      document.removeEventListener('click', handleOpenMenu)
    }
  }, [])*/

  /*useEffect(() => {
    if (localStorage.getItem('testUser')!== null) {
      
    }
    JSON.parse(localStorage.getItem('testUser')) 
  }, [])*/

  async function SignOut() {
    let email = JSON.parse(localStorage.getItem('testUser')).email

    signOutUser(email).then(response => {
      console.log(response)
      dispatch(entry(null))
      localStorage.removeItem('testUser')
      navigate("/",{replace:true})
       }).catch(error => {
      console.log(error)
    })
  }
  console.log(logged)

  return   (logged ?(

    <div className='Header-Box'>

      <div className='nav-header'>
        {hPages.map(link)}
      </div>

      <div className='Header-Logo'>
        <img src="../icons/Icon.png" alt="Logo" />
      </div>

      <div>
        {open && (<div className='User-box'>
        <div>
          <div className='Header-user'>
            <LinkRouter className='Header-option' to='auth/sigout' onClick={handleOpenMenu} >Log Out</LinkRouter>
          </div>
        </div>
      </div>
      )}
        <div>
        <button className='H-Button' onClick={handleOpenMenu}><img src="../icons/user2.png" alt="Logo" /></button>
        </div>
      </div>
    </div>
  ) : ( <div className='Header-Box'>

  <div className='nav-header'>
    {hPages.map(link).slice(0,2)}
  </div>

  <div className='Header-Logo'>
    <img src="../icons/Icon.png" alt="Logo" />
  </div>


  {open && (
    <div lassName='User-box'>
      <div className='Header-user'>
        <LinkRouter className='Header-option' to='auth/signin' onClick={handleOpenMenu}>Log In</LinkRouter>
        <LinkRouter className='Header-option' to='auth/signup' onClick={handleOpenMenu} >Sign Up</LinkRouter>
      </div>
    </div>
  )}
  <div>
        <button className='H-Button' onClick={handleOpenMenu}><img src="../icons/user2.png" alt="Logo" /></button>
        </div>
  </div>))

}



  

