import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className='main-header'>
      <div><NavLink className='logo' to='/'>LIVEABLE</NavLink></div>
      <nav>
        <ul className='nav-list'>
          <li className='nav-item'><NavLink to='/articles'>Articles</NavLink></li>
          <li className='nav-item'><NavLink to='/about'>About</NavLink></li>
          <li className='nav-item'><NavLink to='/contact-us'>Contact Us</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
