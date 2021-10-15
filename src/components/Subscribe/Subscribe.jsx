import React from 'react'
import './Subscribe.css'

export default function Subscribe() {
  return (
    <form className='subscribe-form' name='subscribe' method='POST'>
      <input type="hidden" name="subscribe" value="subscribe" />
      <fieldset className='subscribe-fieldset'>
        <legend className='subscribe-text'>Subscribe</legend>
        <p className='subscribe-subtext'>Subscribe to stay up-to-date on the latest housing news</p>

        <label htmlFor='firstname' hidden>First name:</label>
        <input
          className='subscribe-input'
          id='firstname'
          placeholder='First name'
          name='firstNameSub'
          required
        />

        <label htmlFor='lastname' hidden>Last name:</label>
        <input
          className='subscribe-input'
          id='lastname'
          placeholder='Last name'
          name='lastNameSub'
          required
        />

        <label htmlFor='email' hidden>Email:</label>
        <input
          type='email'
          className='subscribe-input'
          id='email'
          placeholder='Email'
          name='emailSub'
          required
        />

        <button className='subscribe-button' type='submit'>Subscribe</button>
      </fieldset>
    </form>
  )
}
