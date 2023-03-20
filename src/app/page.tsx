import { fetchNews } from "@/lib/fetchNews";
import { categories } from "../../constants";

export default async function Home() {
  // fetch the news data
  const news = await fetchNews(categories.join(","));

  return <main></main>;
}
