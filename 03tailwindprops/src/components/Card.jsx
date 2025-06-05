import React from 'react';

function Card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <img src="/me.jpg" alt="Me" className="w-full h-auto rounded" />
      <h1 className="text-2xl bg-green-500 text-white p-3 rounded my-2">
        A card for photos
      </h1>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, delectus!
      </p>
    </div>
  );
}

export default Card;
