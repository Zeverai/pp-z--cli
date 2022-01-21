// ----------------------------------------------------------------| React
import React, { Fragment } from "react";
// ----------------------------------------------------------------| Style
import {
   Nav,
   NavExpandable,
   NavItem,
   NavItemSeparator,
   NavList,
   NavGroup,
   PageHeader,
   Page,
} from "@patternfly/react-core";
import { BrowserRouter } from "react-router-dom";

const NavBar = () => {
   return (
      <Fragment>
         <Nav variant='horizontal'>
            <NavItem className='--pf-global--palette--black-400'>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Hobbies</NavItem>
            <NavItem>Contact Me</NavItem>
         </Nav>
      </Fragment>
   );
};

export default NavBar;
