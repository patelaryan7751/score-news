import React, { useEffect, useState } from "react";
import { fetchAllSportsForPreferenceSelection } from "../../context/sports/action";
import {
  useAllSportsDispatch,
  useAllSportsState,
} from "../../context/sports/context";
import { Sport } from "../../context/sports/types";
import { useTeamsDispatch, useTeamsState } from "../../context/teams/context";
import { fetchAllTeamsForPreferenceSelection } from "../../context/teams/action";
import { Team } from "../../context/matches/types";
import { useUserDispatch, useUserState } from "../../context/users/context";
import { addUserPreference } from "../../context/users/action";
import {
  getSportsArrayFromPreferences,
  getTeamsArrayFromPreferences,
} from "../../utils/commonUtils";
import PrefereceSkeletonLoader from "./Loader/PrefereceSportsSkeletonLoader";
import { Link } from "react-router-dom";

export default function Preference() {
  let sportsState: any = useAllSportsState();
  let sportsDispatch = useAllSportsDispatch();
  let teamsState: any = useTeamsState();
  let teamsDispatch = useTeamsDispatch();
  let userState: any = useUserState();
  let userDispatch = useUserDispatch();

  useEffect(() => {
    fetchAllSportsForPreferenceSelection(sportsDispatch);
    fetchAllTeamsForPreferenceSelection(teamsDispatch);
  }, []);
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

  return (
    <div className="mx-auto p-10 md:w-[800px] shadow-2xl rounded-md">
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
                    Please select a sport to view the teams of selected sports
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
              <a
                href={"/account"}
                className="m-4 text-white px-3 py-2 bg-gray-600 text-center rounded-md hover:bg-gray-500"
              >
                Go Back
              </a>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
