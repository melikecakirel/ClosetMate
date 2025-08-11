import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import OutfitCard from '../components/OutfitCard';
import './Home.css';
import '../components/OutfitCard.css';



const Home = () => {
  const [selectedStyle, setSelectedStyle] = useState("");
  const styles = ["Spor", "Şık", "Rahat", "Klasik"];
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const selectStyle = (style) => {
    setSelectedStyle(style);
    setMenuOpen(false);
  }

  return (
    <div>

      <div className="header-under-navbar">
        <div className="welcome-text">Hoş Geldin, Melike!</div>

        <div className="center-content" onClick={toggleMenu} style={{cursor: "pointer"}}>
          {selectedStyle || "Bugün ne tarz giyinmek istersin?"}
          <span className="arrow">{menuOpen ? "▲" : "▼"}</span>

          {menuOpen && (
            <div className="dropdown-menu">
              {styles.map((style) => (
                <div 
                  key={style} 
                  className="dropdown-item" 
                  onClick={() => selectStyle(style)}
                >
                  {style}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="weather-text">Bugünkü Hava: Güneşli</div>
        <div className="outfit-container">
          <OutfitCard />
        </div>

    </div>

      

        
      </div>

  );
};


export default Home;
