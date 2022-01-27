// ________________________________________________________________| React
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/Global.css";
// ________________________________________________________________| Components
import NavBar from "./components/NavBar";
import FootBar from "./components/FootBar";
import Cultured from "./components/Cultured";
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
         <Cultured />
         <Fragment>
            <Routes>
               <Route exact path='/' element={<Home />} />
               <Route exact path='/about' element={<About />} />
               <Route exact path='/projects' element={<Projects />} />
               <Route exact path='/contact' element={<Contact />} />
               <Route exact path='/hobbies' element={<Hobbies />} />
            </Routes>
         </Fragment>
         <Cultured />
         <FootBar />
      </Router>
   );
};

export default App;
