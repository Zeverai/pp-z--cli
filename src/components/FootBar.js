// ________________________________________________________________| React
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// ________________________________________________________________| Components
import About from "../pages/About";
import Contact from "../pages/Contact";
import Hobbies from "../pages/Hobbies";
import Projects from "../pages/Projects";
// ________________________________________________________________| Images
// ________________________________________________________________| Style
import "../css/Global.css";
import "../css/FootBar.css";

const FootBar = () => {
   return (
      <div className='footer-container'>
         <ul className='footer-ul'>
            <li className='footer-item'>
               <a
                  className='footer-icon'
                  href='https://www.github.com/zeverai/'
                  target='_blank'
               >
                  <i className='fa-brands fa-github'></i>
               </a>
            </li>

            <li className='footer-item'>
               <a
                  className='footer-icon'
                  href='https://www.instagram.com/zeverai/'
                  target='_blank'
               >
                  <i className='fa-brands fa-linkedin'></i>
               </a>
            </li>
            <li className='footer-item'>
               <a
                  className='footer-icon'
                  href='https://www.instagram.com/zeverai/'
                  target='_blank'
               >
                  <i className='fa-brands fa-instagram'></i>
               </a>
            </li>
            <li className='footer-item'>
               <a
                  className='footer-icon'
                  href='https://www.twitter.com/TheZeveraiGuy/'
                  target='_blank'
               >
                  <i className='fa-brands fa-twitter'></i>
               </a>
            </li>
            <li className='footer-item'>
               <a
                  className='footer-icon'
                  href='https://www.instagram.com/zeverai/'
                  target='_blank'
               >
                  <i className='fa-brands fa-facebook'></i>
               </a>
            </li>
            <li className='footer-item'>
               <a
                  className='footer-icon'
                  href='https://www.steam.com/zeverai/'
                  target='_blank'
               >
                  <i className='fa-brands fa-steam'></i>
               </a>
            </li>
         </ul>
      </div>
   );
};

export default FootBar;
