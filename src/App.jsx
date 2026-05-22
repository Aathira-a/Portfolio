import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
//import Data from "./components/Data";
function App(){
  return(
    <>
   <Home/>
    <About/>
     <Education/>
      <Skills/>
       <Contact/>
       <Footer/>
    </>
  )
}
export default App;