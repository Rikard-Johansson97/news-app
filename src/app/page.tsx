import { fetchNews } from "@/lib/fetchNews";
import { categories } from "../../constants";
import NewsList from "@/components/Article/NewsList";
import response from "../../response.json";
export default async function Home() {
  // fetch the news data
  // const news: NewsResponse =
  //   response || (await fetchNews(categories.join(",")));

  const news = response;

  console.log(news);

  return (
    <main>
      <NewsList news={news} />
    </main>
  );
}
