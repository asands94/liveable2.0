import React from 'react'
import './Landing.css'
import house from '../../assets/house.svg'

export default function Landing() {
  return (
    <div className='landing-container'>
      <div className='landing-text-container'>
        <h1 className='landing-header'>Everyone deserves to own a healthy home.</h1>
        <div className='landing-subtext-container'>
          <h3 className='landing-subtext'>xx% of rental properties are not well maintained</h3>
          <h3 className='landing-subtext'>Due to x, the majority of people can no longer afford to own their own home. </h3>
        </div>
        <button className='landing-button'>Learn More</button>
      </div>
      <img className='landing-image' src={house} alt='house' />
    </div>
  )
}
