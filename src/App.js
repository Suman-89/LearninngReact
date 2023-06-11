import React from 'react'
import { Routes, Route } from "react-router-dom";
import TextForm from './components/TextForm';
import AboutPage from './components/AboutPage';


const App= () => {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<TextForm />} />
    <Route exact path="/about" element={<AboutPage />} />
    </Routes>
    </>
   
  );
}

export default App;
