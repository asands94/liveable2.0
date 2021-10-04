import React from 'react'
import './Stats.css'

export default function Stats() {
  return (
    <div className='stats-container'>
      <div className='stats-info-container'>
        <div className='stats'>
          <button className='stat-info-circle'>10%</button>
          <p className='stat-info'>The percent of people who can get a loan with less than a 20% deposit</p>
        </div>
        <div className='stats'>
          <button className='stat-info-circle'>10.5 years</button>
          <p className='stat-info'>The average amount of time it takes to save a 20% deposit</p>
        </div>
        <div className='stats'>
          <button className='stat-info-circle'>$850,000</button>
          <p className='stat-info'>The median house price across New Zealand as of August 2021</p>
        </div>
      </div>
    </div>
  )
}
