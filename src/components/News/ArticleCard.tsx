import React from "react";

function ArticleCard() {
  return (
    <div className="sm:flex m-4 bg-white p-3 ">
      <div className="mb-4 mx-auto flex-shrink-0 sm:mb-0 sm:mr-4 order-last">
        {/* <img
          src={
            "https://images.pexels.com/photos/187329/pexels-photo-187329.jpeg?auto=compress&cs=tinysrgb&w=1440"
          }
          alt=""
          className="h-48 w-full sm:w-auto"
        /> */}
        <div className="flex-shrink-0">
          <img
            src={
              "https://images.pexels.com/photos/187329/pexels-photo-187329.jpeg?auto=compress&cs=tinysrgb&w=1440"
            }
            alt=""
            className="h-full w-auto rounded-md object-cover object-center sm:h-32 sm:w-32"
          />
        </div>
      </div>
      <div className="">
        <p className="text-base">Cricket</p>
        <h4 className="text-lg font-bold">
          Excitement and Drama in Unforgettable Match
        </h4>
        <p className="mt-1">
          A game filled with excitement, suspense, and drama, a true reflection
          of the spirit of the sport
        </p>
        <p className="mt-2">23 Oct,2003</p>
      </div>
    </div>
  );
}

export default ArticleCard;
