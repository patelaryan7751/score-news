import React, { Suspense } from "react";
import ErrorBoundary from "../../ErrorBoundary";
import FavouriteNewsCardListSkeletonLoader from "./Loader/FavouriteNewsCardListSkeletonLoader";
const FavouriteNewsCardListItems = React.lazy(
  () => import("./FavouriteNewsCardListItems")
);
interface FavouriteNewsCardListProps {
  teamId: string;
  sportId: string;
}
function FavouriteNewsCardList(props: FavouriteNewsCardListProps) {
  return (
    <>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="suspense-loading">
              <>
                <FavouriteNewsCardListSkeletonLoader />
              </>
            </div>
          }
        >
          <FavouriteNewsCardListItems
            teamId={props?.teamId}
            sportId={props?.sportId}
          />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default FavouriteNewsCardList;
