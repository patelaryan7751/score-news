import React from "react";

function MatchBar() {
  return (
    <>
      <div className="flex-shrink-0 w-80 bg-white shadow-lg mx-2 p-4 rounded-md">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold ">Cricket</h2>
            <p className="text-sm font-normal">IPL 2023,Delhi</p>
          </div>
          <div>
            <p>Refresh</p>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div>
            <h2 className="text-md font-bold ">CSK</h2>
            <h2 className="text-md font-bold ">GT</h2>
          </div>
          <div>
            <p>
              (20 Overs)
              <span className="text-md font-bold "> 235/5</span>
            </p>
            <p>
              (20 Overs)
              <span className="text-md font-bold "> 235/5</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MatchBar;
