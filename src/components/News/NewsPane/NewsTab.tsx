import React from "react";
import { useAllSportsState } from "../../../context/sports/context";
import { Sport } from "../../../context/sports/types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTabDispatch, useTabState } from "../../../context/tabs/context";
import { changeTab } from "../../../context/tabs/action";
import {
  usesortDateDispatch,
  usesortDateState,
} from "../../../context/sortDate/context";
import {
  changeDate,
  changeDate_sortAction,
} from "../../../context/sortDate/action";
import NewsTabSectionSkeletonLoader from "./Loader/NewsTabSectionSkeletonLoader";

function NewsTab() {
  let state: any = useAllSportsState();
  let tabstate: any = useTabState();
  let sortDateState: any = usesortDateState();
  const sortDispatch = usesortDateDispatch();
  const dispatchTabs = useTabDispatch();
  const { isLoading, sports } = state;
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    changeTab(dispatchTabs, { id: event.target.value });
    if (event.target.value === "yournews") {
      navigate("/");
    } else {
      navigate(`/sports/${Number(event.target.value)}`);
    }
  };
  const handleTab = (id: string | undefined) => {
    changeTab(dispatchTabs, { id: id });
  };
  if (isLoading) {
    return (
      <>
        <NewsTabSectionSkeletonLoader />
      </>
    );
  }
  return (
    <div className="mt-5 px-2">
      <div className="mt-3 sm:mt-4 flex lg:flex-row flex-col justify-between">
        <div>
          <div className="sm:hidden my-2">
            <label htmlFor="current-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="current-tab"
              name="current-tab"
              value={tabstate.id}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 py-1 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value={`yournews`} key="Your News">
                Your News
              </option>
              {sports.map((sport: Sport) => (
                <option key={sport?.name} value={`${sport?.id}`}>
                  {sport?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              <Link
                key={"Your News"}
                to={`/`}
                onClick={() => {
                  handleTab("yournews");
                }}
                className={`
                ${
                  tabstate.id === "yournews"
                    ? " border-gray-700 text-gray-700 font-extrabold "
                    : " border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 "
                }
                whitespace-nowrap border-b-2 px-1 pb-2 text-sm font-medium`}
                aria-current={tabstate.id === "yournews" ? "page" : undefined}
              >
                Your News
              </Link>
              {sports.map((sport: Sport) => (
                <Link
                  key={sport.name}
                  to={`/sports/${sport?.id}`}
                  onClick={() => {
                    handleTab(String(sport?.id));
                  }}
                  className={`
                ${
                  String(tabstate.id) === String(sport?.id)
                    ? " border-gray-700 text-gray-700 font-extrabold "
                    : " border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 "
                }
                whitespace-nowrap border-b-2 px-1 pb-2 text-sm font-medium`}
                  aria-current={
                    String(tabstate.id) === String(sport?.id)
                      ? "page"
                      : undefined
                  }
                >
                  {sport?.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="my-1">
          <div className="flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <input
                type="date"
                name="date"
                className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={sortDateState?.sortDate}
                onChange={(e: any) => {
                  changeDate(sortDispatch, e.target.value);
                }}
              />
            </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={() => {
                changeDate_sortAction(sortDispatch, true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="-ml-0.5 h-5 w-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                />
              </svg>
              Sort
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsTab;
