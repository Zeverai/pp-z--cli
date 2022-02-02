// ________________________________________________________________| Imports
import React from "react";
import { Link } from "react-router-dom";
import "../css/Global.css";
import "../css/Header.css";
// ________________________________________________________________| HeadSplash
const HeadSplash = () => {
   return (
      <header className='header-container'>
         <div className='header-title-splash '>
            <p className='header-title'>Page</p>
            <Link to='/'>
               <p className='header-title secret'>Title</p>
            </Link>
            <p className='header-title'>Here</p>
         </div>
      </header>
   );
};

export default HeadSplash;
