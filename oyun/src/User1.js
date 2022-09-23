import React, { useState } from "react";
import araba1 from "./images/araba3.png";
import bitis from "./images/bitis.png";
const User1 = ({
  message,
  setMessage,
  kelime,
  setKelime,
  parcalanmisyazi,
  indextutucu,
  setIndextutucu,
  toggle
}) => {
  const [position, setPosition] = useState(0);
  
  let HandleClick = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <img className="arabalar" style={{ left: position }} src={araba1}></img>
      <img className="bitis" src={bitis}></img>
      <div className="oyunalani">
        <h3>{kelime}</h3>
      </div>
      <div className="oyunalani">
        <input
          value={message}
          type="text"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              if (kelime.toLowerCase() === message.toLowerCase()) {
                setPosition(position + 20);
                if (position >= 330) {
                  setPosition(0);
                  toggle();
                  
                }
              }
              setKelime(parcalanmisyazi[indextutucu]);
              setIndextutucu(++indextutucu);
              setMessage("");
              
            }
          }}
          onChange={HandleClick}
        ></input>
      </div>
     
    </div>
  );
};
export default User1;
