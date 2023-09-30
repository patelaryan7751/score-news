import React, { useEffect } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Cog6ToothIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/logo.png";
import { useUserDispatch, useUserState } from "../../context/users/context";
import { syncUserWithContextState } from "../../context/users/action";
import { useAllSportsDispatch } from "../../context/sports/context";
import { useTeamsDispatch, useTeamsState } from "../../context/teams/context";
import { usePreferenceModalDispatch } from "../../context/preferenceModal/context";
import { openPrefModal } from "../../context/preferenceModal/action";

const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");

const Appbar = () => {
  useEffect(() => {
    syncUserWithContextState(dispatchUsers);
  }, []);
  let state: any = useUserState();
  const dispatchUsers = useUserDispatch();
  let sportsDispatch = useAllSportsDispatch();
  let teamsDispatch = useTeamsDispatch();
  let preferenceModalDispatch = usePreferenceModalDispatch();
  const { isAuthenticated, userDetails } = state;

  const userNavigation = [
    {
      name: "Home",
      href: "/account",
      auth: isAuthenticated,
    },
    {
      name: "Your Profile",
      href: "/account/profile",
      auth: isAuthenticated,
    },
    // {
    //   name: "Your Preference",
    //   href: "/account/preference",
    //   auth: isAuthenticated,
    // },
    {
      name: "Sign out",
      href: "/signout",
      auth: isAuthenticated,
    },
    {
      name: "Home",
      href: "/",
      auth: !isAuthenticated,
    },
    {
      name: "Sign in",
      href: "/signin",
      auth: !isAuthenticated,
    },
    {
      name: "Sign up",
      href: "/signup",
      auth: !isAuthenticated,
    },
  ];

  return (
    <>
      <Disclosure as="nav" className="border-b border-slate-200">
        {({ open }) => (
          <div className="mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <a
                  href={`${isAuthenticated ? "/account" : "/"}`}
                  className="flex-shrink-0 inline-flex"
                >
                  <img className="h-8" src={Logo} alt="Smarter Tasks" />
                  <span className="text-2xl font-semibold mx-2">
                    Score News
                  </span>
                </a>
              </div>
              <div>
                <div className="ml-4 flex items-center md:ml-6">
                  {isAuthenticated ? (
                    <Menu as="div" className="relative ml-3 mt-2">
                      <Menu.Button
                        onClick={() =>
                          openPrefModal(
                            preferenceModalDispatch,
                            sportsDispatch,
                            teamsDispatch
                          )
                        }
                        className="rounded-full bg-white text-gray-400 hover:text-gray-600"
                      >
                        <Cog6ToothIcon className="h-8 w-8" aria-hidden="true" />
                      </Menu.Button>
                    </Menu>
                  ) : (
                    <></>
                  )}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      {isAuthenticated ? (
                        <>
                          <Menu.Button className="rounded-full bg-gray-500 p-1 w-8 h-8 text-gray-400 hover:text-gray-600">
                            <div className="bg-gray-500 text-sm font-medium text-white">
                              {userDetails?.name?.charAt(0)}
                            </div>
                          </Menu.Button>
                        </>
                      ) : (
                        <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-600">
                          <UserCircleIcon
                            className="h-8 w-8"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      )}
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) =>
                          item.auth ? (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ) : (
                            ""
                          )
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        )}
      </Disclosure>
    </>
  );
};

export default Appbar;
