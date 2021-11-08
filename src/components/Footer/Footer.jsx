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
          (c)2021. liveable-nz.netlify.app All Rights Reserved
          <Link className='p-policy' to='//www.freeprivacypolicy.com/live/0f3e883d-2b9d-426e-b5ea-ab7859b66c98' target='_blank' rel='noreferrer'>Privacy Policy</Link>
        </p>
      </div>
    </footer>
  )
}
