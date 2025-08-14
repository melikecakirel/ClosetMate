import React, { useEffect, useState } from "react";
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (indexToRemove) => {
    const newFavorites = favorites.filter((_, index) => index !== indexToRemove);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <div className="favorites-page">
      <h2>Favorilerim</h2>
      {favorites.length === 0 && <p>Henüz favori kombin yok.</p>}

      <div className="favorites-grid">
        {favorites.map((combo, index) => (
          <div key={index} className="favorite-card">
            <img src={combo.tshirt.img} alt={combo.tshirt.name} />
            <img src={combo.pants.img} alt={combo.pants.name} />
            <img src={combo.belt.img} alt={combo.belt.name} />
            <img src={combo.shoes.img} alt={combo.shoes.name} />
            <button 
              className="remove-btn" 
              onClick={() => removeFavorite(index)}
            >
              ❌ Sil
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
