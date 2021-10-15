import './Contact.css'

export default function Contact() {

  return (
    <div className='contact-container'>
      <div className='contact-box'>
        <section className='contact-left'>
          <h2>We'd Love to Hear From You!</h2>
        </section>
        <section className='contact-right'>
          <form name='contact' method='POST' action='/success'>
            <input type="hidden" name="contact" value="contact" />
            <fieldset className='field'>
              <legend className='contact-legend'>Contact Us</legend>
              <label htmlFor='firstnamecontact' hidden>First name:</label>
              <input
                className='contact-input'
                placeholder='First name*'
                id='firstnamecontact'
                name='firstName'
                required

              />
              <label htmlFor='lastnamecontact' hidden>Last name:</label>
              <input
                className='contact-input'
                placeholder='Last name*'
                id='lastnamecontact'
                name='lastName'
                required

              />
              <label htmlFor='emailcontact' hidden>Email:</label>
              <input
                type='email'
                className='contact-input'
                placeholder='Email*'
                id='emailcontact'
                name='email'
                required
              />
              <label htmlFor='phonecontact' hidden>Phone:</label>
              <input
                type='tel'
                className='contact-input'
                placeholder='Phone'
                id='phonecontact'
                name='phone'
              />
              <label htmlFor='messagecontact' hidden>Message:</label>
              <textarea
                className='contact-message'
                placeholder='Message*'
                id='messagecontact'
                name='message'
                required
              />
              <button className='contact-button' type='submit'>Send</button>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  )
}
