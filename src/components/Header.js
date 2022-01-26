import React from "react";
import { Link } from "react-router-dom";
import "../css/Global.css";
import "../css/Header.css";

const HeadSplash = () => {
   return (
      <header className='header-container'>
         <div className='header-title-splash '>
            <p className='header-title'>Z E V E R A I</p>
            <Link to='/'>
               <p className='header-title secret'>⌨</p>
            </Link>
            <p className='header-title'>CODY TYLER</p>
         </div>
      </header>
   );
};

export default HeadSplash;
