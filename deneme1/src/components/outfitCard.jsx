import React, { useState, useEffect } from 'react';

const tshirts = [
  {name: "Üst1", img: "/images/ust1.jpg", style: "Şık"},
  {name: "Üst2", img: "/images/ust2.jpg", style: "Şık"},
  {name: "Üst3", img: "/images/ust3.jpg", style: "Şık"},
  {name: "Üst4", img: "/images/ust4.jpg", style: "Rahat"},
  {name: "Üst5", img: "/images/ust5.jpg", style: "Rahat"},
  {name: "Üst6", img: "/images/ust6.jpg", style: "Şık"},
  {name: "Üst7", img: "/images/ust7.jpg", style: "Şık"},
]

const pants = [
  { name: "Alt1", img: "/images/alt1.jpg", style: "Şık" },
  { name: "Alt2", img: "/images/alt2.jpg", style: "Rahat" },
  { name: "Alt3", img: "/images/alt3.jpg", style: "Şık" },
  { name: "Alt4", img: "/images/alt4.jpg", style: "Şık" },
  { name: "Alt5", img: "/images/alt5.jpg", style: "Rahat" },
];

const belts = [
  { name: "Aksesuar1", img: "/images/aksesuar1.jpg" },
  { name: "Aksesuar2", img: "/images/aksesuar2.jpg" },
  { name: "Aksesuar3", img: "/images/aksesuar3.jpg" },
  { name: "Aksesuar4", img: "/images/aksesuar4.jpg" },
];

const shoes = [
  { name: "Ayakkabı1", img: "/images/ayakkabı1.jpg" },
  { name: "Ayakkabı2", img: "/images/ayakkabı2.jpg" },
  { name: "Ayakkabı3", img: "/images/ayakkabı3.jpg" },
  { name: "Ayakkabı4", img: "/images/ayakkabı4.jpg" },
  { name: "Ayakkabı5", img: "/images/ayakkabı5.jpg" },
  { name: "Ayakkabı6", img: "/images/ayakkabı6.jpg" },

];

const normalize = (s) => (s ? s.toString().trim().toLocaleLowerCase('tr-TR') : '');



const OutfitCard = () => {
  const [tshirtIndex, setTshirtIndex] = useState(0);
  const [pantsIndex, setPantsIndex] = useState(0);
  const [beltIndex, setBeltIndex] = useState(0);
  const [shoesIndex, setShoesIndex] = useState(0);


  const changeIndex = (setter, currentIndex, arrayLength, direction) => {
    if (direction === "next") {
      setter((currentIndex + 1) % arrayLength);
    } else {
      setter((currentIndex - 1 + arrayLength) % arrayLength);
    }
  };

  return (
    <div className="combo-card">
      <h3>Kombin Kartı</h3>

      <div className="combo-item">
        <h4>Üst</h4>
        <button onClick={() => changeIndex(setTshirtIndex, tshirtIndex, tshirts.length, "prev")}>{"<"}</button>
        <img src={tshirts[tshirtIndex].img} alt={tshirts[tshirtIndex].name} />
        <button onClick={() => changeIndex(setTshirtIndex, tshirtIndex, tshirts.length, "next")}>{">"}</button>
      </div>

      <div className="combo-item">
        <h4>Alt</h4>
        <button onClick={() => changeIndex(setPantsIndex, pantsIndex, pants.length, "prev")}>{"<"}</button>
        <img src={pants[pantsIndex].img} alt={pants[pantsIndex].name} />
        <button onClick={() => changeIndex(setPantsIndex, pantsIndex, pants.length, "next")}>{">"}</button>
      </div>

      <div className="combo-item">
        <h4>Aksesuar</h4>
        <button onClick={() => changeIndex(setBeltIndex, beltIndex, belts.length, "prev")}>{"<"}</button>
        <img src={belts[beltIndex].img} alt={belts[beltIndex].name} />
        <button onClick={() => changeIndex(setBeltIndex, beltIndex, belts.length, "next")}>{">"}</button>
      </div>

      <div className="combo-item">
        <h4>Ayakkabı</h4>
        <button onClick={() => changeIndex(setShoesIndex, shoesIndex, shoes.length, "prev")}>{"<"}</button>
        <img src={shoes[shoesIndex].img} alt={shoes[shoesIndex].name} />
        <button onClick={() => changeIndex(setShoesIndex, shoesIndex, shoes.length, "next")}>{">"}</button>
      </div>
    </div>
  );
};

export default OutfitCard;