import { Team } from "../context/matches/types";
import { Sport } from "../context/sports/types";

export const getSportsArrayFromPreferences = () => {
  let isPreference = !!localStorage.getItem("userData");
  if (isPreference) {
    let preferences = JSON.parse(localStorage.getItem("userData"))?.preferences;

    if (Object.keys(preferences).length > 0) {
      return preferences?.sports;
    } else {
      return [];
    }
  } else {
    return [];
  }
};

export const getTeamsArrayFromPreferences = () => {
  let isPreference = !!localStorage.getItem("userData");
  if (isPreference) {
    let preferences = JSON.parse(localStorage.getItem("userData"))?.preferences;
    if (Object.keys(preferences).length > 0) {
      return preferences?.teams;
    } else {
      return [];
    }
  } else {
    return [];
  }
};

export const generatePreferenceTeamArray = (
  preferenceTeamArray: Team[],
  preferenceSportArray: Sport[],
  AllTeams: []
) => {
  let arrayOfSportsWithEmptyTeams = preferenceSportArray.filter(
    (sport: Sport) => isSelectedSportsTeamEmpty(sport, preferenceTeamArray)
  );
  let missingListOfTeams = AllTeams.filter((team: Team) =>
    canTeamBeAdded(arrayOfSportsWithEmptyTeams, team)
  );
  return [...preferenceTeamArray, ...missingListOfTeams];
};

const canTeamBeAdded = (
  arrayOfSportsWithEmptyTeams: Sport[],
  currTeam: Team
) => {
  const findMatchingSport = arrayOfSportsWithEmptyTeams.filter(
    (sport: Sport) => sport?.name === currTeam?.plays
  );
  if (findMatchingSport.length === 1) {
    return true;
  } else {
    return false;
  }
};

const isSelectedSportsTeamEmpty = (
  sport: Sport,
  preferenceTeamArray: Team[]
) => {
  let getSelectedSportTeam = preferenceTeamArray.filter(
    (team: Team) => sport?.name === team?.plays
  );
  if (getSelectedSportTeam.length === 0) {
    return true;
  } else {
    return false;
  }
};
