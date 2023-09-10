import React from "react";
import ArticleCard from "../ArticleCard";

function NewsPane() {
  const tabs = [
    { name: "Your News", href: "#", current: true },
    { name: "Cricket", href: "#", current: false },
    { name: "BasketBall", href: "#", current: false },
    { name: "Field Hockey", href: "#", current: false },
    { name: "Tennis", href: "#", current: false },
  ];
  return (
    <div className="col-span-3 bg-slate-100/100 p-4 ">
      <div className="mt-5 px-2">
        <div className="mt-3 sm:mt-4 flex lg:flex-row flex-col justify-between">
          <div>
            <div className="sm:hidden">
              <label htmlFor="current-tab" className="sr-only">
                Select a tab
              </label>
              <select
                id="current-tab"
                name="current-tab"
                className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                defaultValue={tabs.find((tab) => tab.current).name}
              >
                {tabs.map((tab) => (
                  <option key={tab.name}>{tab.name}</option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={`
                    ${
                      tab.current
                        ? " border-gray-700 text-gray-700 font-extrabold "
                        : " border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 "
                    }
                    whitespace-nowrap border-b-2 px-1 pb-2 text-sm font-medium`}
                    aria-current={tab.current ? "page" : undefined}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="my-2">
            <div className="flex rounded-md shadow-sm">
              <div className="relative flex flex-grow items-stretch focus-within:z-10">
                <input
                  type="date"
                  name="date"
                  className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="John Smith"
                />
              </div>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
      <div className="overflow-y-scroll h-screen custom-scrollbar">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}

export default NewsPane;
