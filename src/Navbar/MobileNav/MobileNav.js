import React from 'react';
import './MobileNav.css';

export default function MobileNav({isOpen, toggleMenu}) {
  return (
   <>
   <div className={`mobile-menu ${isOpen ? "active": ""}`}
   onClick={toggleMenu}>
    <div className='mobile-menu-container'>
        <img className="logo" src='assets\Screenshot 2024-01-29 145200.png' alt='' />
        <ul>
            <li>
                <a className='menu-item'>Home</a>
            </li>
            <li>
                <a className='menu-item'>Skills</a>
            </li>
            <li>
                <a className='menu-item'>Projects</a>
            </li>
            <li>
                <a className='menu-item'>Contact Me</a>
            </li>
        </ul>
    </div>
   </div>
   
   </>
  )
}
