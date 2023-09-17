import React from "react";
import { useTabState } from "../../../context/tabs/context";
import { useNavigate } from "react-router-dom";
interface FavouriteNewsCardProps {
  id: number;
  title: string;
  summary: string;
}

function FavouriteNewsCard(props: FavouriteNewsCardProps) {
  const { id, title, summary } = props;
  const navigate = useNavigate();

  let stateTab: any = useTabState();
  return (
    <div>
      <div className="m-4 bg-white p-3 ">
        <div className="">
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="mt-1">{summary}</p>
        </div>
        <button
          onClick={() => {
            navigate(`/articleDetails/${id}?tab=${stateTab?.id}`);
          }}
          className="bg-gray-700 text-white font-semibold w-full p-1 mt-2"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default FavouriteNewsCard;
