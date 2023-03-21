import Link from "next/link";
import React, { FC } from "react";

interface ReadMoreButtonProps {
  article: Article;
}

const ReadMoreButton: FC<ReadMoreButtonProps> = ({ article }) => {
  const queryString = Object.entries(article)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const url = `/article?${queryString}`;

  return (
    <Link
      href={url}
      className='bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500 flex justify-center items-center'>
      Read More
    </Link>
  );
};

export default ReadMoreButton;
