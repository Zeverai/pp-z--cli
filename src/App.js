// ----------------------------------------------------------------| React
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// ----------------------------------------------------------------| Components
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
// ----------------------------------------------------------------| Style

const App = () => {
   return (
      <Router>
         <Fragment>
            <Routes>
               <Route exact path='/' element={<Home />} />
               <Route exact path='/About' element={<About />} />
               <Route exact path='/Projects' element={<Projects />} />
               <Route exact path='/Contact' element={<Contact />} />
               <Route exact path='/Hobbies' element={<Hobbies />} />
            </Routes>
         </Fragment>
      </Router>
   );
};

export default App;
