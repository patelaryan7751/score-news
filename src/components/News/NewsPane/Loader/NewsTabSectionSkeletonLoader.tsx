import React from "react";

function NewsTabSectionSkeletonLoader() {
  return (
    <div className="mt-5 px-2 animate-pulse">
      <div className="mt-3 sm:mt-4 flex lg:flex-row flex-col justify-between">
        <div>
          <div className="sm:hidden my-2">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
            </nav>
          </div>
        </div>
        <div className="my-1">
          <div className="flex rounded-md shadow-sm">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-full md:w-48"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsTabSectionSkeletonLoader;
