import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-box'>
        <section className='contact-left'>
          <h2>We'd Love to Hear From You!</h2>
        </section>
        <section className='contact-right'>
          <form>
            <fieldset className='field'>
              <legend className='contact-legend'>Contact Us</legend>
              <label htmlFor='firstnamecontact' hidden>First name:</label>
              <input
                className='contact-input'
                placeholder='First name*'
                id='firstnamecontact'
              />
              <label htmlFor='lastnamecontact' hidden>Last name:</label>
              <input
                className='contact-input'
                placeholder='Last name*'
                id='lastnamecontact'
              />
              <label htmlFor='emailcontact' hidden>Email:</label>
              <input
                type='email'
                className='contact-input'
                placeholder='Email*'
                id='emailcontact'
              />
              <label htmlFor='phonecontact' hidden>Phone:</label>
              <input
                type='tel'
                className='contact-input'
                placeholder='Phone'
                id='phonecontact'
              />
              <label htmlFor='messagecontact' hidden>Message:</label>
              <textarea
                className='contact-message'
                placeholder='Message*'
                id='messagecontact'
              />
              <button className='contact-button'>Send</button>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  )
}
