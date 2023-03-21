import { fetchNews } from "@/lib/fetchNews";
import { categories } from "../../constants";
import NewsList from "@/components/Article/NewsList";
export default async function Home() {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  console.log(news);

  return (
    <main>
      <NewsList news={news} />
    </main>
  );
}
