import React, { Suspense } from "react";
const MatchesListItems = React.lazy(() => import("./MatchesListItems"));
import ErrorBoundary from "../../components/ErrorBoundary";
import MatchSectionSkeletonLoader from "./Loader/MatchSectionSkeletonLoader";

export default function MatchesList() {
  return (
    <>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="suspense-loading">
              {" "}
              <MatchSectionSkeletonLoader />
            </div>
          }
        >
          <MatchesListItems />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
