import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Closet from './pages/Closet';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import SignUpForm from './SignUpForm';
import OutfitCard from './components/OutfitCard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Closet" element={<Closet />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;


