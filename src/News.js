import React from "react";
import NewsElement from "./NewsElement";
import newsData from "./newsData.js";

export default function News() {
  // eslint-disable-next-line no-unused-vars
  const [newsCard, setNewsCard] = React.useState(newsData);
  const newsElemet = newsCard.map((news) => (
    <NewsElement
      key={news.id}
      author={news.author}
      socialMedia={news.socialMedia}
      url={news.url}
      article={news.article}
      date={news.date}
    />
  ));

  return (
    <div>
      <h2 id="news" className="my-12 text-6xl font-bold text-center uppercase">
        News
      </h2>
      <div className="m-6 border-2 rounded-md">{newsElemet}</div>
    </div>
  );
}
