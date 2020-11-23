import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

export const News = () => {
  const data  = useContext(NewsContext);

 
  

  return (
    <div>
     <header> <navbar><h1 className="head__text">World today </h1></navbar></header>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}
