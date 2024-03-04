import React from 'react'
import './Contact.css'
import ContactInfoCard from './ContactInfoCard'
import { SiGmail } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import ContactForm from './ContactForm';

export default function Contact() {
  return (
   <section className='contact-container'>
    <h1>Contact Me</h1>
    <div className='contact-content'>
        <div style={{flex:1}}>
         <ContactInfoCard 
         iconUrl={<SiGmail />}
         text={"seenu5180singh@gmail.com"} 
         />
         <ContactInfoCard 
         iconUrl={<FaGithubSquare />}
         text={"https://github.com/satyendra9580"} 
         />
        </div>
        <div style={{flex:1}}>
            <ContactForm />
        </div>
    </div>
   </section>
  )
}
