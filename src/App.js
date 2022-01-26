// ________________________________________________________________| React
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/Global.css";
// ________________________________________________________________| Components
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
// ________________________________________________________________| Style
import "./css/Global.css";

const App = () => {
   return (
      <Router>
         <Header />
         <NavBar />
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
