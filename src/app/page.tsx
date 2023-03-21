import { fetchNews } from "@/lib/fetchNews";
import { categories } from "../../constants";
import NewsList from "@/components/Article/NewsList";
import response from "../../response.json";

export default async function Home() {
  // fetch the news data
  const news: NewsResponse =
    response || (await fetchNews(categories.join(",")));

  console.log(news);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
