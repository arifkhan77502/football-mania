import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Player from './Components/Player/Player';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path = "football-mania" element = {<Player />} />

        <Route path = "about" element = {<About />} />
        
        <Route path = "contact" element = {<Contact />} />
      </Routes>

      <div className='footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
