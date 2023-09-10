import React from "react";
import ArticleCard from "./ArticleCard";

function AllNews() {
  const tabs = [
    { name: "Your News", href: "#", current: true },
    { name: "Cricket", href: "#", current: false },
    { name: "BasketBall", href: "#", current: false },
    { name: "Field Hockey", href: "#", current: false },
    { name: "Tennis", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      <h3 className="text-2xl px-2 my-5 font-bold leading-6 text-gray-900">
        Trending News
      </h3>
      <div className="grid grid-cols-4 gap-1">
        <div className="col-span-3 bg-slate-100/50 p-4 ">
          <div className="mt-5 px-2">
            <div className="mt-3 sm:mt-4">
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
                      className={classNames(
                        tab.current
                          ? "border-gray-700 text-gray-700 font-extrabold"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "whitespace-nowrap border-b-2 px-1 pb-2 text-sm font-medium"
                      )}
                      aria-current={tab.current ? "page" : undefined}
                    >
                      {tab.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
        <div className="mt-5 pt-2">
          <h3 className="text-xl px-2  pt-5 font-bold leading-6 text-gray-900">
            Favourite
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AllNews;
