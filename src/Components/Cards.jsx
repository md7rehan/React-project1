import React, { useState } from "react";
import FetchProd from "./FetchProd";

const Cards = ({ prod }) => {
  const [liked, setLiked] = useState(false)

  const handleClick= () => {
    setLiked(!liked)
  }
  return (
    <>
      <div className="max-w-xs bg-blue-300 p-4 m-2 rounded-lg shadow shadow-slate-400 flex flex-col">
  {/* Content Area */}
  <div className="flex-grow flex flex-col items-center">
    <h1 className="text-lg font-semibold mb-2 text-center truncate">
      {prod.title}
    </h1>

    <img
      src={prod.thumbnail}
      alt={prod.id}
      className="w-full max-h-36 object-contain mb-3"
    />

    <p className="text-sm text-center mb-3 leading-snug line-clamp-3">
      {prod.description}
    </p>

    <div className="flex justify-between w-full mb-3 px-4 text-sm font-medium">
      <p>${prod.price}</p>
      <p>Rating: {prod.rating}</p>
    </div>
  </div>

  {/* Buttons Area */}
  <div className="flex justify-between gap-3">
    <button className="bg-indigo-400 hover:bg-indigo-500 text-white rounded-lg px-4 py-1 transition">
      Add to cart
    </button>
    <button
      onClick={handleClick}
      className="text-2xl"
    >
      {liked ? '❤' : '🤍'}
    </button>
  </div>
</div>

    </>
  );
};

export default Cards;
