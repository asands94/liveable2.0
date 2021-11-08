import React from 'react'
import { Link } from "react-router-dom"
import './Landing.css'
import house from '../../assets/house.svg'

export default function Landing() {
  return (
    <div className='landing-container'>
      <div className='landing-text-container'>
        <h1 className='landing-header'>Everyone deserves to own a healthy home.</h1>
        <div className='landing-subtext-container'>
          <h3 className='landing-subtext'>32% of rental properties are poorly maintained.</h3>
          <p className='source'><Link to='//www.stuff.co.nz/business/property/91934483/rental-houses-more-poorly-maintained-more-mouldy-branz' target='_blank' rel='noreferrer'>(Source)</Link></p>
          <h3 className='landing-subtext'>Due to house prices, the majority of people can no longer afford to own their own home. </h3>
        </div>
        <Link to='//action.greens.org.nz/support_a_rental_warrant_of_fitness' target='_blank' rel='noreferrer'><button className='landing-button'>Learn More</button></Link>
      </div>
      <img className='landing-image' src={house} alt='house' />
    </div>
  )
}
