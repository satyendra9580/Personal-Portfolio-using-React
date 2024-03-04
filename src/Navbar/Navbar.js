import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';
import { Hamburger } from '../Hero/icons';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  
  const [openMenu, setOpenMenu]=useState(false);
  const toggleMenu=()=>{
    setOpenMenu(!openMenu);
  };

  return ( 
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
   <nav className='nav-wrapper'>
    <div className='nav-content'>
        <img className='logo' src='assets\Screenshot 2024-01-29 145200.png' alt='' />
        
        <ul>
            <li>
                <a href='' className='menu-item'>Home</a>
            </li>
            <li>
                <a href=''className='menu-item'>Skills</a>
            </li>
            <li>
                <a className='menu-item'>Projects</a>
            </li>
            <li>
                <a className='menu-item'>Contact Me</a>
            </li>
            </ul>
           
    <button className='menu-btn' onClick={toggleMenu}>

      {openMenu ? "X" :<Hamburger />}
      </button>    
    </div>
   </nav>
</>
  )
}



