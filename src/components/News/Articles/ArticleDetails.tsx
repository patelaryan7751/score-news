import React, { useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useArticlesDispatch,
  useArticlesState,
} from "../../../context/articles/context";
import { fetchArticle } from "../../../context/articles/action";
import { useTabDispatch } from "../../../context/tabs/context";
import { changeTab } from "../../../context/tabs/action";
import { Team } from "../../../context/teams/types";

const ArticleDetails = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [tab, setTab] = useState<string | undefined>("");
  const { id } = useParams<any>();
  const dispatchArticles = useArticlesDispatch();
  let stateArticles: any = useArticlesState();
  const dispatchTabs = useTabDispatch();
  const { isLoading, article, isError, errorMessage } = stateArticles;
  // const getTimeByDateString = (date: Date | string) => {
  //   let dateObject = new Date(date);
  //   return `${dateObject.toISOString().split("T")[1].split(".")[0]}`;
  // };
  // const getDateByDateString = (date: Date | string) => {
  //   let dateObject = new Date(date);
  //   return `${dateObject.toISOString().split("T")[0]}`;
  // };
  useEffect(() => {
    fetchArticle(dispatchArticles, Number(id));
    const urlParams = new URLSearchParams(window.location.search);
    const tabValue = urlParams.get("tab");
    console.log(tabValue, "lkjhh");
    setTab(tabValue);
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    changeTab(dispatchTabs, { id: tab });
    history.back();
    setIsOpen(false);
  };

  if (isLoading) {
    return (
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto custom-scrollbar">
              <div className="flex min-h-full items-center justify-center sm:p-12 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center leading-6 text-gray-700"
                    >
                      Loading...
                    </Dialog.Title>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  }

  if (isError) {
    return <>{errorMessage}</>;
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto custom-scrollbar">
            <div className="flex min-h-full items-center justify-center sm:p-12 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="absolute right-0 top-0 pr-4 pt-4 ">
                    <button
                      type="button"
                      className=" text-xl font-semibold rounded-md bg-white text-gray-400 hover:text-gray-500"
                      onClick={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-3xl font-bold"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-light leading-6 text-gray-700/75"
                  ></Dialog.Title>
                  <div className="mt-4">
                    <div className="bg-white">
                      <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                          <div className="w-full lg:max-w-lg lg:flex-auto">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                              {article?.sport?.name} #{article?.id}
                            </h2>
                            <p className="text-sm font-semibold mt-2 ">
                              {
                                String(article?.date)
                                  ?.toString()
                                  ?.split("T")[1]
                                  ?.split(".")[0]
                              }
                              ,{" "}
                              {String(article?.date)?.toString()?.split("T")[0]}
                            </p>
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                              {article?.summary}
                            </p>
                            <img
                              src={article?.thumbnail}
                              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                            />
                          </div>
                          <div className="w-full lg:max-w-xl lg:flex-auto">
                            <h3 className=" text-3xl font-bold">
                              {article?.title}
                            </h3>
                            <p className="my-3 space-x-2">
                              {article?.teams.map((team: Team) => (
                                <span
                                  className="bg-gray-200/75 text-gray-600/75 p-2 my-2"
                                  key={team?.id}
                                >
                                  # {team?.name}
                                </span>
                              ))}
                            </p>
                            <p className="my-6 text-xl leading-8 text-gray-600">
                              {article?.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default ArticleDetails;
