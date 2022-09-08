import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import '../Styles/Header.css';

const hPages = [
  { url: '/icons/homewhitel.png', name: 'Home', to: '/', id: 'nav1' },
  { url: '/icons/planewl.png', name: 'Cities', to: '/cities', id: 'nav2' },
  { url: '/icons/passport.png', name: 'New City', to: '/newcity', id: 'nav4' },
  { url: '/icons/passport.png', name: 'Edit City', to: '/editcity', id: 'nav3' },
  { url: '/icons/planewl.png', name: 'My Tineraries', to: '/mytineraries', id: 'nav5' }
]

const link = (page) => <LinkRouter className='hRouter' key={page.id} to={page.to}>{page.name} <img className='hImg' width={45} src={page.url} alt={page.id} /></LinkRouter>
export default function Header() {
  const [open, setOpen] = useState(false)

  const  handleOpenMenu = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }
  return (
    <div className='Header-Box'>
      <div>
        {hPages.map(link)}
        
      </div>


      <div className='Header-Logo'>
        <img src="../icons/Icon.png" alt="Logo" />
      </div>

      <div className='User-box'>
      <div>
        {
          open
            ?
            <ul>
              <li>Log In</li>
              <li>Sing Up</li>
            </ul>
            : null
        }
      </div>
        <button className='H-Button' onClick={handleOpenMenu}><img src="../icons/user2.png" alt="Logo" /></button>
      </div>
    </div>
  )

}

