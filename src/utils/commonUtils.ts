import { Article } from "../context/articles/types";
import { Match, Team } from "../context/matches/types";
import { Sport } from "../context/sports/types";

export const getSportsArrayFromPreferences = () => {
  let isPreference = !!localStorage.getItem("userData");
  if (isPreference) {
    let preferences = JSON.parse(localStorage.getItem("userData"))?.preferences;
    if (preferences) {
      if (Object.keys(preferences).length > 0) {
        return preferences?.sports;
      } else {
        return [];
      }
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
    if (preferences) {
      if (Object.keys(preferences).length > 0) {
        return preferences?.teams;
      } else {
        return [];
      }
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

export const generatePreferenceArticleArray = (
  preferenceSportArray: Sport[],
  preferenceTeamArray: Team[],
  articleData: Article[]
) => {
  let arrayOfSportsWithEmptyTeams = preferenceSportArray.filter(
    (sport: Sport) => isSelectedSportsTeamEmpty(sport, preferenceTeamArray)
  );
  let filteredPreferenceSportsFromArticleDataArray = articleData.filter(
    (article: Article) =>
      isArticlePresentInPreferenceSports(article, preferenceSportArray)
  );
  let filterPreferenceTeamsFromArticleDataArray =
    filteredPreferenceSportsFromArticleDataArray.filter(
      (article: Article) =>
        isArticleSportConatinsEmptyTeams(
          article.sport.name,
          arrayOfSportsWithEmptyTeams
        ) || isArticlePresentInPreferenceTeams(article, preferenceTeamArray)
    );

  return filterPreferenceTeamsFromArticleDataArray;
};

export const generatePrefernceMatchArray = (
  preferenceSportArray: Sport[],
  preferenceTeamArray: Team[],
  matchData: Match[]
) => {
  let arrayOfSportsWithEmptyTeams = preferenceSportArray.filter(
    (sport: Sport) => isSelectedSportsTeamEmpty(sport, preferenceTeamArray)
  );
  let filteredPreferenceSportsFromMatchDataArray = matchData.filter(
    (match: Match) =>
      isMatchPresentInPreferenceSports(match, preferenceSportArray)
  );

  let filterPreferenceTeamsFromMatchDataArray =
    filteredPreferenceSportsFromMatchDataArray.filter(
      (match: Match) =>
        isMatchSportConatinsEmptyTeams(
          match.sportName,
          arrayOfSportsWithEmptyTeams
        ) || isMatchPresentInPreferenceTeams(match, preferenceTeamArray)
    );
  return filterPreferenceTeamsFromMatchDataArray;
};

const isMatchSportConatinsEmptyTeams = (
  matchSportName: string,
  arrayOfSportsWithEmptyTeams: Sport[]
) => {
  let getSportsArray = arrayOfSportsWithEmptyTeams.filter(
    (sport: Sport) => sport.name === matchSportName
  );
  if (getSportsArray.length === 1) {
    return true;
  } else {
    return false;
  }
};

const isMatchPresentInPreferenceTeams = (
  match: Match,
  preferenceTeamArray: Sport[]
) => {
  let getTeamArrayOfPresentMatch = preferenceTeamArray.filter((team: Team) =>
    match.teams.length !== 0
      ? isMatchTeamArrayContainsPreferenceTeam(match.teams, team)
      : true
  );
  if (getTeamArrayOfPresentMatch.length >= 1) {
    return true;
  } else {
    return false;
  }
};

const isMatchPresentInPreferenceSports = (
  match: Match,
  preferenceSportArray: Sport[]
) => {
  let getSportArrayOfPresentMatch = preferenceSportArray.filter(
    (sport: Sport) => match.sportName === sport.name
  );
  if (getSportArrayOfPresentMatch.length === 1) {
    return true;
  } else {
    return false;
  }
};

const isMatchTeamArrayContainsPreferenceTeam = (
  matchTeams: Team[],
  currTeam: Team
) => {
  const getTeamArray = matchTeams.filter(
    (team: Team) => Number(team.id) === Number(currTeam.id)
  );
  if (getTeamArray.length >= 1) {
    return true;
  } else {
    return false;
  }
};

const isArticleSportConatinsEmptyTeams = (
  articleSportName: string,
  arrayOfSportsWithEmptyTeams: Sport[]
) => {
  let getSportsArray = arrayOfSportsWithEmptyTeams.filter(
    (sport: Sport) => sport.name === articleSportName
  );
  if (getSportsArray.length === 1) {
    return true;
  } else {
    return false;
  }
};

const isArticlePresentInPreferenceTeams = (
  article: Article,
  preferenceTeamArray: Sport[]
) => {
  let getTeamArrayOfPresentArticle = preferenceTeamArray.filter((team: Team) =>
    article.teams.length !== 0
      ? isArticleTeamArrayContainsPreferenceTeam(article.teams, team)
      : true
  );
  if (getTeamArrayOfPresentArticle.length >= 1) {
    return true;
  } else {
    return false;
  }
};

const isArticleTeamArrayContainsPreferenceTeam = (
  articleTeams: Team[],
  currTeam: Team
) => {
  console.log(articleTeams.length === 0, articleTeams.length, "got it");
  const getTeamArray = articleTeams.filter(
    (team: Team) => Number(team.id) === Number(currTeam.id)
  );
  if (getTeamArray.length >= 1) {
    console.log(articleTeams, "s111");
    return true;
  } else {
    console.log(getTeamArray, "jks12");
    console.log(articleTeams, "s112");
    console.log(currTeam, "lio21");
    return false;
  }
};

const isArticlePresentInPreferenceSports = (
  article: Article,
  preferenceSportArray: Sport[]
) => {
  let getSportArrayOfPresentArticle = preferenceSportArray.filter(
    (sport: Sport) => article.sport.name === sport.name
  );
  if (getSportArrayOfPresentArticle.length === 1) {
    return true;
  } else {
    return false;
  }
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
