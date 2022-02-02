// ________________________________________________________________| React
import React, { setState, useEffect } from "react";
import { Link } from "react-router-dom";

// ________________________________________________________________| Style
import "../css/Global.css";
import "../css/NavBar.css";

const NavBar = () => {
   return (
      <div className='nav-container'>
         <Link to='/' className='nav-item'>
            HOME
         </Link>
         <Link to='/about' className='nav-item'>
            WHO AM I
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
