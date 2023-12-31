import React from "react";
import { Article } from "../../../context/articles/types";
import { useTabState } from "../../../context/tabs/context";
import { openModal } from "../../../context/articleModal/action";
import { useArticleModalDispatch } from "../../../context/articleModal/context";
import { useArticlesDispatch } from "../../../context/articles/context";

interface ArticleCardProps {
  article: Article;
}

function ArticleCard(props: ArticleCardProps) {
  const { id, title, thumbnail, sport, summary, date } = props.article;
  let articleModalDispatch: any = useArticleModalDispatch();
  const dispatchArticle = useArticlesDispatch();
  const dateObject = new Date(date);
  const dateOfArticle = dateObject.toISOString().split("T")[0];
  const time = dateObject.toISOString().split("T")[1].split(".")[0];
  return (
    <div
      onClick={() =>
        openModal(articleModalDispatch, Number(id), dispatchArticle)
      }
      key={id}
      className="cursor-pointer"
    >
      <div className="sm:flex m-4 bg-white p-3 rounded-md ">
        <div className="mb-4 mx-auto flex-shrink-0 sm:mb-0 sm:mr-4 order-last">
          <div className="flex-shrink-0">
            <img
              src={thumbnail}
              alt=""
              className="h-full w-auto rounded-md object-cover object-center sm:h-32 sm:w-32"
            />
          </div>
        </div>
        <div className="">
          <p className="text-base">{sport.name}</p>
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="mt-1">{summary}</p>
          <p className="mt-2">
            {time} {dateOfArticle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
