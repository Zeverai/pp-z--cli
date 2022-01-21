// ----------------------------------------------------------------| React
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// ----------------------------------------------------------------| Components
import Home from "./pages/Home";
import About from "./pages/About";

// ----------------------------------------------------------------| Style
import "./App.css";

const App = () => {
   return (
      <Fragment>
         <Router>
            <Routes>
               <Route exact path='/' element={<Home />} />
               <Route exact path='/About' element={<About />} />
            </Routes>
         </Router>
      </Fragment>
   );
};

export default App;
