import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className='footer-left'>
        <h1>LIVEABLE</h1>
        {/* <p>follow us</p> */}
      </div>
      <div className='footer-middle'>
        <ul className='footer-list'>
          <li className='footer-list-item'><Link to='/about'>About</Link></li>
          <li className='footer-list-item'><Link to='/work-with-us'>Work With Us</Link></li>
          <li className='footer-list-item'><Link to='/contact-us'>Contact Us</Link></li>
        </ul>
        <p>
          (c)2021. Liveable.com All Rights Reserved
          <Link className='p-policy' to='/privacy-policy'>Privacy Policy</Link>
        </p>
      </div>
    </footer>
  )
}
