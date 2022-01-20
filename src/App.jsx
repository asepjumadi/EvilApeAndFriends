import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './main/pages/Home.pages';
import Authors from './main/pages/Authors.bio';
import Story from './main/pages/story.pages';
import Navigation from './main/components/Nav.comp';
function App() {

  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/authors" element={<Authors/>}/>
        <Route path="/story" element={<Story/>}/>
      </Routes>
      
    </div>
  )
}

export default App
