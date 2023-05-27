import React from 'react';
import '../styles/header.css'
import { images } from '../constants/images';
import LoginButton from './Button';

const Header = () => {
  const handleLoanDropdown = () => {
    // Code to handle the loan dropdown menu
    console.log('Loan dropdown clicked');
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={images.logo} alt="Header" />
      </div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a href="/loans" className="nav-link" onClick={handleLoanDropdown}>
              Loans <i className="fa fa-caret-down"></i>
            </a>
            <div className="dropdown-content">
              {/* Dropdown content */}
              <a href="/personal-loans" className="dropdown-link">Personal Loans</a>
              <a href="/home-loans" className="dropdown-link">Home Loans</a>
              <a href="/car-loans" className="dropdown-link">Car Loans</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="/emi-calculator" className="nav-link">
              EMI Calculator
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact-us" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="user-profile">
          <LoginButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
