import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Appointments from './views/Appointments';


function App() {
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
