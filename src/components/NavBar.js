// ________________________________________________________________| React
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// ________________________________________________________________| Components
import About from "../pages/About";
import Contact from "../pages/Contact";
import Hobbies from "../pages/Hobbies";
import Projects from "../pages/Projects";
// ________________________________________________________________| Style
import "../css/Global.css";
import "../css/NavBar.css";

const NavBar = () => {
   return (
      <nav className='nav-container'>
         <ul className='nav-ul'>
            <li className='nav-item'>
               <Link to='/' className='nav-link'>
                  home
               </Link>
            </li>
            <li className='nav-item'>
               <Link to='/' className='nav-link'>
                  about
               </Link>
            </li>
            <li className='nav-item'>
               <Link to='/' className='nav-link'>
                  projects
               </Link>
            </li>
            <li className='nav-item'>
               <Link to='/' className='nav-link'>
                  contact
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default NavBar;
