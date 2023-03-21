import { fetchNews } from "@/lib/fetchNews";
import { categories } from "../../../constants";
import NewsList from "@/components/Article/NewsList";
import response from "../../../response.json";

interface pageProps {
  searchParams?: { term: string };
}

const page = async ({ searchParams }: pageProps) => {
  // const news: NewsResponse = await fetchNews(
  //   "general",
  //   searchParams?.term,
  //   true
  // );

  const news = response;

  return (
    <div>
      <h1 className='headerTitle'>Search Results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default page;
