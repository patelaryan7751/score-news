import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  let [isOpen, setIsOpen] = useState(true);
  const { id } = useParams<any>();

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
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
            <div className="flex min-h-full items-center justify-center sm:p-9 text-center">
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
                    >
                      X
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-light leading-6 text-gray-700/75"
                  >
                    Cricket/2023-08-01/12:08:34
                  </Dialog.Title>
                  <div className="mt-4">
                    <div className="bg-white">
                      <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                          <div className="w-full lg:max-w-lg lg:flex-auto">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                              Excitement and Drama in Unforgettable Match
                            </h2>
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                              A game filled with excitement, suspense, and
                              drama, a true reflection of the spirit of the
                              sport
                            </p>
                            <img
                              src="https://images.pexels.com/photos/187329/pexels-photo-187329.jpeg?auto=compress&cs=tinysrgb&w=1440"
                              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                            />
                          </div>
                          <div className="w-full lg:max-w-xl lg:flex-auto">
                            <h3 className="sr-only">Job openings</h3>
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                              Diam nunc lacus lacus aliquam turpis enim. Eget
                              hac velit est euismod lacus. Est non placerat nam
                              arcu. Cras purus nibh cursus sit eu in id. Diam
                              nunc lacus lacus aliquam turpis enim. Eget hac
                              velit est euismod lacus. Est non placerat nam
                              arcu. Cras purus nibh cursus sit eu in id. Diam
                              nunc lacus lacus aliquam turpis enim. Eget hac
                              velit est euismod lacus. Est non placerat nam
                              arcu. Cras purus nibh cursus sit eu in id. Diam
                              nunc lacus lacus aliquam turpis enim. Eget hac
                              velit est euismod lacus. Est non placerat nam
                              arcu. Cras purus nibh cursus sit eu in id. Diam
                              nunc lacus lacus aliquam turpis enim. Eget hac
                              velit est euismod lacus. Est non placerat nam
                              arcu. Cras purus nibh cursus sit eu in id. Diam
                              nunc lacus lacus aliquam turpis enim. Eget hac
                              velit est euismod lacus. Est non placerat nam
                              arcu. Cras purus nibh cursus sit eu in id. Diam
                              nunc lacus lacus aliquam turpis enim. Eget hac
                              velit est euismod lacus. Est non placerat nam
                              arcu. Cras purus nibh cursus sit eu in id. Diam
                              nunc lacus lacus aliquam turpis enim. Eget hac
                              velit est euismod lacus. Est non placerat nam
                              arcu. Cras purus nibh cursus sit eu in id.
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
