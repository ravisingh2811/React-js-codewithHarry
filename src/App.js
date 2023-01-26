
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setmode] = useState('light')
 const toggleMode = () => {
  if(mode === 'light'){
    setmode('dark');
    document.body.setAttribute("data-bs-theme" , "dark");
  }else{
    setmode('light');
    // document.body.classList.remove('bg-dark');
    // document.body.style.Color = "white"
    document.body.setAttribute("data-bs-theme" , "light");
  }
 }


  return (
  <>
   <Navbar tittle = "Mere nav" mode ={mode} toggleMode = {toggleMode}/>
   <div className="container my-3">
        <TextForm heading = "Enter you text below"/>
   </div>
  
</>
  );
}

export default App;
