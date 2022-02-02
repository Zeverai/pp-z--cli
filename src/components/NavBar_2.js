// ________________________________________________________________| React
import React, { Fragment, setState, useEffect } from "react";
import { Link } from "react-router-dom";
// ________________________________________________________________| Style
import "../css/Global.css";
import "../css/NavBar.css";

const NavBar_2 = () => {
   return (
      <nav className='nav-container'>
         <div className='nav-block'>
            <Link className='nav-item'>Profile</Link>
            <Link className='nav-item'>Who Am I</Link>
            <Link className='nav-item'>Projects</Link>
            <Link className='nav-item'>Contact</Link>
         </div>
      </nav>
   );
};

export default NavBar_2;
