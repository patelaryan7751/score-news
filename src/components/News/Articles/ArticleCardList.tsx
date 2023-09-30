import React, { Suspense } from "react";
import ErrorBoundary from "../../ErrorBoundary";
import ArticleCardListSkeletonLoader from "./Loader/ArticleCardListSkeletonLoader";
const ArticleCardListItems = React.lazy(() => import("./ArticleCardListItems"));

function ArticleCardList() {
  return (
    <>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="suspense-loading">
              <>
                <ArticleCardListSkeletonLoader />
              </>
            </div>
          }
        >
          <ArticleCardListItems />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default ArticleCardList;
