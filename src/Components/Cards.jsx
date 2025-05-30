import React, { useState } from "react";
import FetchProd from "./FetchProd";

const Cards = ({ prod }) => {
  const [liked, setLiked] = useState(false)

  const handleClick= () => {
    setLiked(!liked)
  }
  return (
    <>
      <div className="max-w-80  text-center bg-blue-300 bg-white p-2 m-2 shadow shadow-slate-400">
        <h1 className="text-2xl">{prod.title}</h1>
        <img src={prod.thumbnail} alt={prod.id} className="w-100" />
        <p>{prod.description}</p>
        <div className="flex justify-around m-2">
          <p>${prod.price}</p>
        <p>Rating: {prod.rating}</p>
        </div>

        <div className="flex justify-around m-2">
          <button className="bg-indigo-400 rounded-lg p-2">add to cart</button><br />
        <button onClick={handleClick} className="text-2xl m-2">{liked ? '❤' : '🤍'}</button>
        </div>
        
      
      </div>
    </>
  );
};

export default Cards;
