import React from 'react'
import araba2 from "./images/araba4.png"
import bitis from "./images/bitis.png"
 const User2 = () => {
  return (
    <div>
      <img className='arabalar' src={araba2}></img>
      <img className='bitis' src={bitis}></img>
      <div className='oyunalani'>
         <h3>yazılar</h3>
      </div>
      <div className='oyunalani'>
            <input></input>
        </div>
    </div>
  )
}
export default User2;