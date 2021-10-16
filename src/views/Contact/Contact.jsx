import './Contact.css'

export default function Contact() {

  return (
    <div className='contact-container'>
      <div className='contact-box'>
        <section className='contact-left'>
          <h2>We'd Love to Hear From You!</h2>
        </section>
        <section className='contact-right'>
          <form className='form-class' name='contact' method='POST'>
            <input type="hidden" name="form-name" value="contact" />
            <fieldset className='field'>
              <legend className='contact-legend'>Contact Us</legend>
              <div className='contact-names'>
                <label htmlFor='firstnamecontact' hidden>First name:</label>
                <input
                  className='contact-input name-input'
                  placeholder='First name*'
                  id='firstnamecontact'
                  name='firstName'
                  required
                />
                <label htmlFor='lastnamecontact' hidden>Last name:</label>
                <input
                  className='contact-input name-input'
                  placeholder='Last name*'
                  id='lastnamecontact'
                  name='lastName'
                  required
                />
              </div>
              <label htmlFor='emailcontact' hidden>Email:</label>
              <input
                type='email'
                className='contact-input email-phone-input'
                placeholder='Email*'
                id='emailcontact'
                name='email'
                required
              />
              <label htmlFor='phonecontact' hidden>Phone:</label>
              <input
                type='tel'
                className='contact-input  email-phone-input'
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
