import React, { useState } from "react";
import "./Closet.css";

const Closet = () => {
    const [clothes, setClothes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Üst");

    const handleImageUpload = (e) => {
        const files = e.target.files;
        const fileArray = Array.from(files).map((file) => {
          const url = URL.createObjectURL(file);
          return { id: url, src: url }; 
        });
      
        setClothes((prev) => prev.concat(fileArray));
      };

    const removeCloth = (id) => {
        setClothes((prev) => prev.filter(item => item.id !== id));
    };

    return (
        <div className="closet-page">
          <input
            type="file" 
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
   
      
          <div className="clothes-grid">   
            {clothes.map((cloth) => (
              <div key={cloth.id} className="cloth-card">
                <img src={cloth.src} alt="Kıyafet" />
                <button onClick={() => removeCloth(cloth.id)}>Sil</button>
              </div>
            ))}
          </div>
        </div>
      );
      

}

export default Closet;