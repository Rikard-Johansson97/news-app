"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface ReadMoreButtonProps {
  article: Article;
}

const ReadMoreButton: FC<ReadMoreButtonProps> = ({ article }) => {
  const router = useRouter();

  function handleClick() {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  }

  return (
    <button
      className='bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500'
      onClick={handleClick}>
      Read More
    </button>
  );
};

export default ReadMoreButton;
