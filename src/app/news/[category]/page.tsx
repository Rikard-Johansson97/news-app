import NewsList from "@/components/Article/NewsList";
import { fetchNews } from "@/lib/fetchNews";
import React from "react";
import { categories } from "../../../../constants";
import response from "../../../../response.json";

interface NewsCategoryProps {
  params: {
    category: Category;
  };
}

export default async function NewsCategory({
  params: { category },
}: NewsCategoryProps) {
  // const news: NewsResponse = await fetchNews(category);

  const news = response;

  return (
    <div>
      <h1 className='headerTitle'>{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
