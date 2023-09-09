import React, { useEffect } from "react";
import MatchesList from "./MatchesList";
import { useMatchesDispatch } from "../../context/matches/context";
import { fetchMatches } from "../../context/matches/action";

function AllMatches() {
  const dispatchMatches = useMatchesDispatch();
  useEffect(() => {
    fetchMatches(dispatchMatches);
  }, []);
  return (
    <div>
      <MatchesList />
    </div>
  );
}

export default AllMatches;
