import React from "react";
import FavouriteNewsCardListItems from "./FavouriteNewsCardListItems";
interface FavouriteNewsCardListProps {
  teamId: string;
  sportId: string;
}
function FavouriteNewsCardList(props: FavouriteNewsCardListProps) {
  return (
    <>
      <FavouriteNewsCardListItems
        teamId={props?.teamId}
        sportId={props?.sportId}
      />
    </>
  );
}

export default FavouriteNewsCardList;
