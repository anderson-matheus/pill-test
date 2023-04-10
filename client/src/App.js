import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Matches from './pages/Matches';
import Title from './components/Title';

function App() {

  return (
    <div>
      <Title />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App