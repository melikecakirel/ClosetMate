import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './Home.css';

const Home = () => {
  const [selectedStyle, setSelectedStyle] = useState("");
  const styles = ["Spor", "Şık", "Rahat", "Klasik"];

  return (
    <div>

    <div className ="header-under-navbar">
        <div className="welcome-text">Hoş Geldin, Melike!</div>
        <div className="center-content">Bugün ne tarz giyinmek istersin?</div>
        <div className="weather-text">Bugünkü Hava: Güneşli</div>
    </div>

      

        
      </div>

  );
};

export default Home;
