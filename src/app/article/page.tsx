/* eslint-disable @next/next/no-img-element */
import Article from "@/components/Article/Article";
import React, { FC } from "react";

interface pageProps {
  searchParams?: Article;
}

const page: FC<pageProps> = ({ searchParams }) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  )
    return <div>no search params</div>;

  const article: Article = searchParams;

  return (
    <article>
      <section className='flex flex-col lg:flex-row pb-24 px-0 lg:px-10'>
        {article.image && (
          <img
            className='h-50 mx-w-md mx-auto md:max-w-lg lg:max-w-xl  object-cover rounded-lg shadow-md'
            src={article.image}
            alt={article.title}
          />
        )}
        <div className='px-10'>
          <h1 className='headerTitle px-0 no-underline pb-2'>
            {article.title}
          </h1>

          <div className='flex divide-x-2 space-x-4'>
            <h2 className='font-bold'>By: {article.author || "Unknown"}</h2>
            <h2 className='font-bold pl-4'>
              source: {article.source || "Unknown"}
            </h2>
            <p className='pl-4'>{article.published_at}</p>
          </div>
          <p className='pt-4'>{article.description}</p>
        </div>
      </section>
    </article>
  );
};

export default page;