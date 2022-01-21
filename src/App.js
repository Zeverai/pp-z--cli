// ----------------------------------------------------------------| React
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// ----------------------------------------------------------------| Components
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// ----------------------------------------------------------------| Style

const App = () => {
   return (
      <Fragment>
         <Router>
            <Routes>
               <Route exact path='/' element={<Home />} />
               <Route exact path='/About' element={<About />} />
               <Route exact path='/Projects' element={<Projects />} />
               <Route exact path='/Contact' element={<Contact />} />
            </Routes>
         </Router>
      </Fragment>
   );
};

export default App;
