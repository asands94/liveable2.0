import React from 'react'
import './Subscribe.css'

export default function Subscribe() {
  return (
    <form className='subscribe-form'>
      <fieldset className='subscribe-fieldset'>
        <legend className='subscribe-text'>Subscribe</legend>
        <p className='subscribe-subtext'>Subscribe to stay up-to-date on the latest housing news</p>

        <label htmlFor='firstname' hidden>First name:</label>
        <input
          className='subscribe-input'
          id='firstname'
          placeholder='First name'
        />

        <label htmlFor='lastname' hidden>Last name:</label>
        <input
          className='subscribe-input'
          id='lastname'
          placeholder='Last name'
        />

        <label htmlFor='email' hidden>Email:</label>
        <input
          type='email'
          className='subscribe-input'
          id='email'
          placeholder='Email'
        />

        <button className='subscribe-button'>Subscribe</button>
      </fieldset>
    </form>
  )
}
