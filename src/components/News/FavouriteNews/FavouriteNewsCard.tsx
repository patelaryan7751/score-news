import React from "react";

function FavouriteNewsCard() {
  return (
    <div>
      <div className="m-4 bg-white p-3 ">
        <div className="">
          <h4 className="text-lg font-bold">
            Excitement and Drama in Unforgettable Match
          </h4>
          <p className="mt-1">
            A game filled with excitement, suspense, and drama, a true
            reflection of the spirit of the sport
          </p>
        </div>
        <button className=" bg-gray-700 text-white font-semibold w-full p-1 mt-2">
          Read More
        </button>
      </div>
    </div>
  );
}

export default FavouriteNewsCard;
