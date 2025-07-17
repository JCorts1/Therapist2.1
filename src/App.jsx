import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home'


const About = () => <h2>About</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

function App() {
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
