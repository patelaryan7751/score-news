import React from "react";
import MatchBar from "./MatchBar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div>
      <h3 className="text-2xl px-2 font-bold leading-6 text-gray-900">
        Live Games
      </h3>
      <div className="flex overflow-x-scroll py-4 w-screen custom-scrollbar">
        <MatchBar />
      </div>
    </div>
  );
}
