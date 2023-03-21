import React, { FC } from "react";
import Article from "./Article";

interface NewsListProps {
  news: NewsResponse;
}

const NewsList: FC<NewsListProps> = ({ news }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10'>
      {news.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
