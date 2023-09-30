import React from "react";
import { useArticleModalDispatch } from "../../../context/articleModal/context";
import { useArticlesDispatch } from "../../../context/articles/context";
import { openModal } from "../../../context/articleModal/action";
interface FavouriteNewsCardProps {
  id: number;
  title: string;
  summary: string;
}

function FavouriteNewsCard(props: FavouriteNewsCardProps) {
  const { id, title, summary } = props;
  let articleModalDispatch: any = useArticleModalDispatch();
  const dispatchArticle = useArticlesDispatch();
  return (
    <div>
      <div className="m-4 bg-white p-3 ">
        <div className="">
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="mt-1">{summary}</p>
        </div>
        <button
          onClick={() => {
            openModal(articleModalDispatch, Number(id), dispatchArticle);
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
