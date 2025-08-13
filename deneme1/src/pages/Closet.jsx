import React, { useState } from "react";
import "./Closet.css";

const categories = ["Üst", "Alt", "Aksesuar", "Ayakkabı"];

const Closet = () => {
  const [clothes, setClothes] = useState([
    { id: 1, src: "/images/ust1.jpg", category: "Üst" },
    { id: 2, src: "/images/alt1.jpg", category: "Alt" },
    { id: 3, src: "/images/aksesuar1.jpg", category: "Aksesuar" },
    { id: 4, src: "/images/ayakkabı1.jpg", category: "Ayakkabı" },
  ]);

  const [selectedClothes, setSelectedClothes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [nextId, setNextId] = useState(5);


  const handleImageUpload = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files).map((file) => {
      const url = URL.createObjectURL(file);
      return {
        id: nextId + Math.random(),
        src: url,
        category: selectedCategory,
      };
    });

    setNextId((prev) => prev + fileArray.length);
    setClothes((prev) => [...prev, ...fileArray]);
  };

  
  const removeCloth = (id) => {
    setClothes((prev) => prev.filter((item) => item.id !== id));
    setSelectedClothes((prev) => prev.filter((item) => item.id !== id));
  };

  const addToOutfit = (cloth) => {
    setSelectedClothes((prev) => [
      ...prev.filter((c) => c.category !== cloth.category),
      cloth,
    ]);
  };

 
  const removeFromOutfit = (id) => {
    setSelectedClothes((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="closet-page">
      <h2>Dolabım</h2>

      
      <label>
        Kategori Seç:{" "}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ marginLeft: 8, marginBottom: 15 }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        style={{ display: "block", marginBottom: 20 }}
      />

      {categories.map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div className="clothes-grid">
            {clothes.filter((c) => c.category === cat).length === 0 && (
              <p style={{ fontStyle: "italic" }}>Henüz {cat} eklenmedi.</p>
            )}

            {clothes.filter((c) => c.category === cat)
              .map((cloth) => (
                <div key={cloth.id} className="cloth-card">
                  <img src={cloth.src} alt={cloth.category} width={100} />
                  <button onClick={() => addToOutfit(cloth)}>
                    Kombine Ekle
                  </button>
                  <button onClick={() => removeCloth(cloth.id)}>Sil</button>
                </div>
              ))}
          </div>
        </div>
      ))}

      <h3>Seçilen Kombin</h3>
      <div className="full-combo-card" style={{ flexDirection: "column" }}>
        {selectedClothes.length === 0 && <p>Kombine eklenmiş kıyafet yok.</p>}

        {categories.map((cat) => {
          const cloth = selectedClothes.find((c) => c.category === cat);
          return (
            <div key={cat} className="comb-item" style={{ marginBottom: 10 }}>
              <h4>{cat}</h4>
              {cloth ? (
                <>
                  <img
                    src={cloth.src}
                    alt={`Seçilen ${cat}`}
                    width={70}
                    height={70}
                  />
                  <button onClick={() => removeFromOutfit(cloth.id)}>Çıkar</button>
                </>
              ) : (
                <p style={{ fontStyle: "italic" }}>Henüz seçilmedi</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Closet;