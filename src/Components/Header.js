import axios from 'axios';
import apiURL from '../api'
import { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { useSignOutUserMutation } from '../features/userAPI';
import { entry } from '../features/userLoggedSlice'
import AlertSign from './AlertSign';
import '../Styles/Header.css';

const hPages = [
  { url: '/icons/homewhitel.png', name: 'Home', to: '/', id: 'nav1' },
  { url: '/icons/planewl.png', name: 'Cities', to: '/cities', id: 'nav2' },
  { url: '/icons/passport.png', name: 'New City', to: '/newcity', id: 'nav4' },
  { url: '/icons/swhitef.png', name: 'Edit City', to: '/editcity', id: 'nav3' },
  { url: '/icons/ticket.png', name: 'My Tineraries', to: '/mytineraries', id: 'nav5' },
  { url: '/icons/swhitef.png', name: 'New Itinerary', to: '/newitinerary', id: 'nav6' },

]




export default function Header() {

  const [modalOpen, setModalOpen] = useState(false); //alert function
  const [messageError, setMessageError] = useState("") //alert function
  const [messageTittle, setMessageTittle] = useState("") //alert function
  //const [iconSVG, setIconSVG] = useState("") //to include SVG alert

  const dispatch = useDispatch()

  const logged = useSelector((state) => state.logged.loggedState)

  console.log(logged)

  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState(false)
  const navigate = useNavigate()
  const menuIcon = useRef()


  const [signOutUser] = useSignOutUserMutation(email)

  const link = (page) => <LinkRouter className='hRouter' key={page.id} to={page.to}>{page.name} <img className='hImg' width={45} src={page.url} alt={page.id} /></LinkRouter>




  const handleOpenMenu = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }



  async function SignOut() {
    let email = JSON.parse(localStorage.getItem('testUser')).email

    signOutUser(email).then(response => {
      console.log(response)
      dispatch(entry(null))
      localStorage.removeItem('testUser')
      navigate("/", { replace: true })

      if (response.error) {
        let dataError = response.error
        let resMessage = dataError.data
        setModalOpen(true)
        setMessageError(resMessage.message)
        setMessageTittle('Error')
      } else {
        let dataResponse = response.data
        let dataSuccess = dataResponse.message
        setModalOpen(true)
        setMessageError(dataSuccess)
        setMessageTittle("Success")

        localStorage.setItem(
          "testUser",
          JSON.stringify(response.data.response.user)
        )
      }


    }).catch(error => {
      console.log(error)
    })
  }
  console.log(logged)

  return (logged ? (

    <div className='Header-Box'>
      
      <nav class="navbar">
      <div class="navbar-container container">
          <input type="checkbox" name="" id=""></input>
          <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
          </div>
          <ul class="menu-items">
              <li>{hPages.map(link)}</li>
          </ul>
      </div>
  </nav>

  <div className='Logo-User'>
  <div className='Header-Logo'>
        <img src="../icons/Icon.png" alt="Logo" />
      </div>

      <div>
        {open && (<div className='User-box'>
          <div>
            <div className='Header-user'>
              <LinkRouter className='Header-option' to='/' onClick={handleOpenMenu} >Log Out</LinkRouter>
            </div>
            
            <div className='div-modal-signinGoogle'>


              {modalOpen === true ?
                <AlertSign
                  setOpenModal={setModalOpen}
                  setMessageError={messageError}
                  setMessageTittle={messageTittle} /> : null}
            </div>
          </div>
        </div>
        )}
        <div>
          <button className='H-Button' onClick={handleOpenMenu}><img src="../icons/user2.png" alt="Logo" /></button>
        </div>
      </div>
    </div>
    </div>
  ) : (<div className='Header-Box'>

<nav class="navbar">
      <div class="navbar-container container">
          <input type="checkbox" name="" id=""></input>
          <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
          </div>
          <ul class="menu-items">
              <li>{hPages.map(link).slice(0, 2)}</li>
          </ul>
      </div>
  </nav>

  <div className='Logo-User'>
  <div className='Header-Logo'>
      <img src="../icons/Icon.png" alt="Logo" />
    </div>

    {open && (
      <div className='User-box'>
        <div className='Header-user'>
          <LinkRouter className='Header-option' to='auth/signin' onClick={handleOpenMenu}>Log In</LinkRouter>
          <LinkRouter className='Header-option' to='auth/signup' onClick={handleOpenMenu} >Sign Up</LinkRouter>
        </div>
      </div>
    )}
    <div className='User-Buttton'>
      <button className='H-Button' onClick={handleOpenMenu}><img src="../icons/user2.png" alt="Logo" /></button>
    </div>
    </div>
  </div>
    
  ))

}




