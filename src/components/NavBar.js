// ________________________________________________________________| React
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// ________________________________________________________________| Components
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
               <Link to='/about' className='nav-link'>
                  whoami
               </Link>
            </li>
            <li className='nav-item'>
               <Link to='/projects' className='nav-link'>
                  projects
               </Link>
            </li>
            <li className='nav-item'>
               <Link to='/contact' className='nav-link'>
                  contact
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default NavBar;
