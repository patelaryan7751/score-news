import React, { useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useAllSportsState } from "../../context/sports/context";
import { Sport } from "../../context/sports/types";
import { useTeamsState } from "../../context/teams/context";
import { Team } from "../../context/matches/types";
import { useUserDispatch, useUserState } from "../../context/users/context";
import { addUserPreference } from "../../context/users/action";
import {
  getSportsArrayFromPreferences,
  getTeamsArrayFromPreferences,
} from "../../utils/commonUtils";
import PrefereceSkeletonLoader from "./Loader/PrefereceSportsSkeletonLoader";
import {
  usePreferenceModalDispatch,
  usePreferenceModalState,
} from "../../context/preferenceModal/context";
import { closePrefModal } from "../../context/preferenceModal/action";

const PreferenceModal = () => {
  let sportsState: any = useAllSportsState();
  let teamsState: any = useTeamsState();
  let userState: any = useUserState();
  let userDispatch = useUserDispatch();
  let preferenceModalState = usePreferenceModalState();
  let preferenceModalDispatch = usePreferenceModalDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const { AllSports } = sportsState;
  const { AllTeams } = teamsState;
  const initialSportsCheckedArray = getSportsArrayFromPreferences();
  const initialTeamsCheckedArray = getTeamsArrayFromPreferences();
  const [sportsChecked, setSportsChecked] = useState<Sport[]>([]);
  const [teamsChecked, setTeamsChecked] = useState<Team[]>([]);
  useEffect(() => {
    setSportsChecked(initialSportsCheckedArray);
    setTeamsChecked(initialTeamsCheckedArray);
  }, []);

  useEffect(() => {
    if (preferenceModalState?.modalStatus === true) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [preferenceModalState.modalStatus]);

  const closeModal = () => {
    location.reload();
    setIsOpen(false);
    closePrefModal(preferenceModalDispatch);
  };

  const isSportPresentIn_sportsChecked_Array = (name: string) => {
    let getSport = sportsChecked.filter((sport: Sport) => name === sport?.name);
    if (getSport.length === 1) {
      return true;
    } else {
      return false;
    }
  };
  const modifiedTeams = AllTeams.filter((team: Team) =>
    isSportPresentIn_sportsChecked_Array(team?.plays)
  );
  const handleSportChange = (e: any) => {
    let checkedId = e.target.value;
    let getSport = AllSports.filter(
      (sport: Sport) => Number(checkedId) === Number(sport?.id)
    );
    if (e.target.checked) {
      setSportsChecked([...sportsChecked, getSport[0]]);
    } else {
      let removedTeamArray = teamsChecked.filter(
        (team: Team) => getSport[0]?.name !== team?.plays
      );
      let removedSportArray = sportsChecked.filter(
        (sport: Sport) => Number(checkedId) !== Number(sport?.id)
      );
      setTeamsChecked(removedTeamArray);
      setSportsChecked(removedSportArray);
    }
  };
  const handleTeamChange = (e: any) => {
    let checkedId = e.target.value;
    if (e.target.checked) {
      let getTeam = AllTeams.filter(
        (team: Team) => Number(checkedId) === Number(team?.id)
      );
      setTeamsChecked([...teamsChecked, getTeam[0]]);
    } else {
      let removedTeamArray = teamsChecked.filter(
        (team: Team) => Number(checkedId) !== Number(team?.id)
      );
      setTeamsChecked(removedTeamArray);
    }
  };
  const isSportChecked = (currSport: Sport) => {
    let getSport = sportsChecked.filter(
      (sport: Sport) => Number(currSport?.id) === Number(sport?.id)
    );
    if (getSport.length === 1) {
      return true;
    } else {
      return false;
    }
  };

  const isTeamChecked = (currTeam: Team) => {
    let getTeam = teamsChecked.filter(
      (team: Team) => Number(currTeam?.id) === Number(team?.id)
    );
    if (getTeam.length === 1) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addUserPreference(userDispatch, sportsChecked, teamsChecked);
  };

  if (sportsState.isError || teamsState.isError || userState.isError) {
    return (
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => {
              closeModal();
            }}
          >
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
                        className="text-xl font-semibold rounded-md bg-white text-gray-400 hover:text-gray-500"
                        onClick={() => {
                          closeModal();
                        }}
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
                      className="text-xl leading-6 text-gray-700"
                    >
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="text-gray-600/75 w-32"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <p>Unable to open preference selector!</p>
                      </div>
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
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
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
                <Dialog.Panel className="md:w-[800px] md:h-[800px] w-full m-2 transform overflow-y-scroll custom-scrollbar rounded-2xl bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all">
                  <div className="absolute right-0 top-0 pr-4 pt-4 ">
                    <button
                      type="button"
                      className=" text-xl font-semibold rounded-md bg-white text-gray-400 hover:text-gray-500"
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 md:text-3xl text-md font-bold"
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
                    className="text-lg font-semibold leading-6 text-gray-700/75"
                  >
                    <p className="text-3xl">Preference Selector</p>
                  </Dialog.Title>
                  <div className="md:mx-auto md:p-10">
                    <form>
                      <div className="p-4">
                        {sportsState?.isLoading ? (
                          <>
                            <PrefereceSkeletonLoader />
                          </>
                        ) : (
                          <fieldset className="p-2">
                            <legend className="text-2xl font-semibold leading-6 text-gray-900">
                              Select your favourite sports:
                            </legend>
                            <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                              {AllSports.map((sport: Sport) => (
                                <div
                                  key={sport?.id}
                                  className="relative flex items-start py-4"
                                >
                                  <div className="min-w-0 flex-1 text-sm leading-6">
                                    <label
                                      htmlFor={`sport-${sport?.id}`}
                                      className="select-none font-medium text-gray-900"
                                    >
                                      {sport?.name}
                                    </label>
                                  </div>
                                  <div className="ml-3 flex h-6 items-center">
                                    <input
                                      id={`sport-${sport?.id}`}
                                      name={`sport-${sport?.id}`}
                                      type="checkbox"
                                      value={sport?.id}
                                      onChange={handleSportChange}
                                      className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600"
                                      checked={isSportChecked(sport)}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </fieldset>
                        )}
                      </div>
                      <div className="p-4">
                        {teamsState?.isLoading ? (
                          <>
                            <PrefereceSkeletonLoader />
                          </>
                        ) : (
                          <fieldset className="overflow-y-scroll h-[300px] custom-scrollbar p-2">
                            <legend className="text-2xl font-semibold leading-6 text-gray-900">
                              Select your favourite teams:
                            </legend>
                            <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                              {sportsChecked.length !== 0 ? (
                                <>
                                  {modifiedTeams.map((team: Team) => (
                                    <div
                                      key={team?.id}
                                      className="relative flex items-start py-4"
                                    >
                                      <div className="min-w-0 flex-1 text-sm leading-6">
                                        <label
                                          htmlFor={`sport-${team?.id}`}
                                          className="select-none font-medium text-gray-900"
                                        >
                                          {team?.name}
                                        </label>
                                      </div>
                                      <div className="ml-3 flex h-6 items-center">
                                        <input
                                          id={`team-${team?.id}`}
                                          name={`team-${team?.id}`}
                                          type="checkbox"
                                          value={team?.id}
                                          onChange={handleTeamChange}
                                          className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600"
                                          checked={isTeamChecked(team)}
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </>
                              ) : (
                                <p className="text-base font-semibold">
                                  Please select a sport to view the teams of
                                  selected sports
                                </p>
                              )}
                            </div>
                          </fieldset>
                        )}
                      </div>
                      <div className="flex flex-row-reverse">
                        {userState.isLoading ? (
                          <>
                            <p className="text-md">Updating...</p>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={handleSubmit}
                              className="m-4 text-white p-2 bg-gray-600 text-center rounded-md hover:bg-gray-500"
                            >
                              Save Preference
                            </button>
                          </>
                        )}
                      </div>
                    </form>
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
export default PreferenceModal;
