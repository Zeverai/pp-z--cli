// ________________________________________________________________| React
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// ________________________________________________________________| Components
// ________________________________________________________________| Style
import "../css/Global.css";
import "../css/NavBar.css";

const NavBar = () => {
   return (
      <div className='nav-container'>
         <Link to='/' className='nav-item'>
            PROFILE
         </Link>
         <Link to='/about' className='nav-item'>
            WHOAMI
         </Link>
         <Link to='/projects' className='nav-item'>
            PROJECTS
         </Link>
         <Link to='/contact' className='nav-item'>
            CONTACT
         </Link>
      </div>
   );
};

export default NavBar;
