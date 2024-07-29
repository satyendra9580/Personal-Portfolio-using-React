import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
  return (
    <div className='contact-form-content'>
        <form>
            <div className='name-content'>
                <input type='text' name='firstname' placeholder='First name' />
                <input type='text' name='lastname' placeholder='Last name' />
            </div>
            <input type='text' name='email' placeholder='Email' />
            <textarea type="text" name='message' placeholder='Message' rows={3} />
            <button>SEND</button>
        </form>
    </div>
     
 
  )
}
