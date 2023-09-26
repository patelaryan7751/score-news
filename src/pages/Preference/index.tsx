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

export default function Preference() {
  let sportsState: any = useAllSportsState();
  let sportsDispatch = useAllSportsDispatch();
  let teamsState: any = useTeamsState();
  let teamsDispatch = useTeamsDispatch();

  useEffect(() => {
    fetchAllSportsForPreferenceSelection(sportsDispatch);
    fetchAllTeamsForPreferenceSelection(teamsDispatch);
  }, []);
  const { AllSports } = sportsState;
  const { AllTeams } = teamsState;
  const [sportsChecked, setSportsChecked] = useState<Sport[]>([]);
  const [teamsChecked, setTeamsChecked] = useState<Team[]>([]);
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
  useEffect(() => {
    console.log(sportsChecked, "ppio");
  }, [sportsChecked]);
  useEffect(() => {
    console.log(teamsChecked, "ppioteam");
  }, [teamsChecked]);

  return (
    <div className="mx-12 px-12 mt-4 h-full">
      <div className="p-4">
        {sportsState?.isLoading ? (
          <>Loading...</>
        ) : (
          <fieldset>
            <legend className="text-2xl font-semibold leading-6 text-gray-900">
              Select your favourite sports:
            </legend>
            <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
              {AllSports.map((sport: Sport) => (
                <div key={sport?.id} className="relative flex items-start py-4">
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
          <>Loading...</>
        ) : (
          <fieldset>
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
    </div>
  );
}
