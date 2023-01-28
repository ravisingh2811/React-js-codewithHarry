
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Contact from './components/Contact';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';

function App() {
  
  const [mode, setmode] = useState('light')
 const toggleMode = () => {
  if(mode === 'light'){
    setmode('dark');
    document.body.setAttribute("data-bs-theme" , "dark");
  }else{
    setmode('light');

    document.body.setAttribute("data-bs-theme" , "light");
  }
 }


  return (
  <>
  <BrowserRouter>
  <Navbar tittle = "Mere nav" mode ={mode} toggleMode = {toggleMode}/>
  <div className="container my-3">
   <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={ <TextForm heading = "Enter you text below"/>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>   
   </div>
  </BrowserRouter>
   
   
  
</>
  );
}

export default App;
