import React from "react";
import MatchSectionHeadingLoader from "./MatchSectionHeadingLoader";
import MatchBarSkeletonLoader from "./MatchBarSkeletonLoader";

function MatchSectionSkeletonLoader() {
  return (
    <>
      <MatchSectionHeadingLoader />
      <div className="flex overflow-x-scroll py-4 pr-6 w-screen custom-scrollbar">
        <MatchBarSkeletonLoader />
        <MatchBarSkeletonLoader />
        <MatchBarSkeletonLoader />
        <MatchBarSkeletonLoader />
        <MatchBarSkeletonLoader />
        <MatchBarSkeletonLoader />
      </div>
    </>
  );
}

export default MatchSectionSkeletonLoader;
