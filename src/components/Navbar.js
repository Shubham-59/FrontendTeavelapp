import React from 'react';
import logo from '../assets/img/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-5">
      <div className="container">
        <a className="navbar-brand" href="/"><img src={logo} height="34" alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#service">Service</a></li>
            <li className="nav-item"><a className="nav-link" href="#destination">Destination</a></li>
            <li className="nav-item"><a className="nav-link" href="#booking">Booking</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonial">Testimonial</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Login</a></li>
            <li className="nav-item"><a className="btn btn-outline-dark" href="#!">Sign Up</a></li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">EN</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#!">EN</a></li>
                <li><a className="dropdown-item" href="#!">BN</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
