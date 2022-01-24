// ----------------------------------------------------------------| React
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// ----------------------------------------------------------------| Components
import About from "../pages/About";
import Contact from "../pages/Contact";
import Hobbies from "../pages/Hobbies";
import Projects from "../pages/Projects";
// ----------------------------------------------------------------| Style

const NavBar = () => {
   return (
      <div className='nav'>
         <nav className='navbar'>
            <Link to='/' classname='nav-item'>
               Home
            </Link>
            <Link to='/About' classname='nav-item'>
               About
            </Link>
            <Link to='/Projects' classname='nav-item'>
               Projects
            </Link>
            <Link to='/Contact' classname='nav-item'>
               Contact
            </Link>
         </nav>
      </div>
   );
};

export default NavBar;
