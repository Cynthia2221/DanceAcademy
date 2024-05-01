import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/header/logo.png"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (<nav>
    <Link to="/" className="title"><p><img src={logo} alt=""></img></p></Link>
    <div className="menu" onClick={() => {
      setMenuOpen(!menuOpen);
    }}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""} style={{ fontFamily: 'Kanit, sans-serif' }}>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
    </ul>
  </nav>
  )
};
