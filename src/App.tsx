import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './pages/Contact';
import Egg from './pages/Egg';
import About from './pages/About';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import BoxPage from './pages/BoxPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<BoxPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/egg" element={<Egg/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
