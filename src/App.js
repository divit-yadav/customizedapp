import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Styles from './components/Styles';
import './App.css';
import './index.css';
import TogglerHeading from './components/TogglerHeading';
import ModeToggler from './components/ModeToggler';



function App() {

   const [word, setWord] = React.useState('Dark Mode');
  
    function toggleMode() {
      setWord(prevMode => (prevMode === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'));
    }


  return (
    <div className="App">
      {/* Navigation bar (always visible) */}
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/Styles" className="nav-item">Styles</Link>
      </nav>

      <TogglerHeading message={word} />
      <button onClick={toggleMode}>Change Mode</button>
      <ModeToggler />

      {/* Route Switching */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Styles" element={<Styles />} />
      </Routes>

      {/* Footer (always visible) */}
      <Footer />
    </div>
  );
}

export default App;
