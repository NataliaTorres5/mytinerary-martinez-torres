import { useRef, useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import '../Styles/Header.css';

const hPages = [
  { url: '/icons/homewhitel.png', name: 'Home', to: '/', id: 'nav1' },
  { url: '/icons/planewl.png', name: 'Cities', to: '/cities', id: 'nav2' },
  { url: '/icons/passport.png', name: 'New City', to: '/newcity', id: 'nav4' },
  { url: '/swhitef.png', name: 'Edit City', to: '/editcity', id: 'nav3' },
  { url: '/ticket.png', name: 'My Tineraries', to: '/mytineraries', id: 'nav5' }
]



export default function Header() {
  
  
  const [open, setOpen] = useState(false)
  const menuIcon = useRef(null)
  
  const link = (page) => <LinkRouter className='hRouter' key={page.id} to={page.to}>{page.name} <img className='hImg' width={45} src={page.url} alt={page.id} /></LinkRouter>
  



  const  handleOpenMenu = (element) => {

    const clickInside = menuIcon.current.contains(element.target)

    if (menuIcon.current !== element.target && !clickInside) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  const handleToggleMenu = () => {
      setOpen(!open)
  }

    useEffect (() => {

      document.addEventListener('click', handleOpenMenu)

      return () => {

        document.removeEventListener('click', handleOpenMenu)
      }
    },[])

  return (
    <div className='Header-Box'>

      <div className='nav-header'>
        {hPages.map(link)}
      </div>


      <div className='Header-Logo'>
        <img src="../icons/Icon.png" alt="Logo" />
      </div>

      <div className='User-box'>
      <div>

      {open && (
                <div className='Header-user'>
                    <LinkRouter className='Header-option' to='login'>Log In</LinkRouter>
                    <LinkRouter className='Header-option' to='auth/signup'>Sign Up</LinkRouter>
                </div>
            )}
           <button className='H-Button' onClick={handleOpenMenu}><img ref={menuIcon} src='../icons/user2.png' className="H-Button" onClick={handleToggleMenu} alt='icon' /> </button>
           
      </div>
      </div> 
    </div>
  )

}

