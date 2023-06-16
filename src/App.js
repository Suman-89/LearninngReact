import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import TextForm from './components/TextForm';
import AboutPage from './components/AboutPage';


const App= () => {
  const [darkMode, setDarkMode] = useState({color: 'black',backgroundColor:'grey'});
  const [button, setButton] = useState('Switch to Dark Mode');
  const [btnVariant, setBtnVariant] = useState("outline-dark");

  return (
    <>
    <Routes>
    <Route exact path="/" element={<TextForm/>} />
    <Route exact path="/about" element={
    <AboutPage 
    darkMode={darkMode} 
    setDarkMode={setDarkMode} 
    button={button} 
    setButton={setButton}
    btnVariant={btnVariant}
    setBtnVariant={setBtnVariant}
    />} />
    </Routes>
    </>
   
  );
}

export default App;
