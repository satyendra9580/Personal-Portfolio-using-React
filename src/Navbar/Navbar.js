import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';
import { Hamburger } from '../Hero/icons';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src='assets/Screenshot 2024-01-29 145200.png' alt='Logo' />
          <ul>
            <li>
              <NavLink to="/" className='menu-item'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/skills" className='menu-item'>Skills</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className='menu-item'>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='menu-item'>Contact Me</NavLink>
            </li>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            {openMenu ? "X" : <Hamburger />}
          </button>
        </div>
      </nav>
    </>
  );
}
