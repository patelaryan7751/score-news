import React from "react";

function FavouriteNewsCardSkeletonLoader() {
  return (
    <>
      <div className="animate-pulse">
        <div className="m-4 bg-white p-3 ">
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5 w-full"></div>
        </div>
      </div>
    </>
  );
}

export default FavouriteNewsCardSkeletonLoader;
