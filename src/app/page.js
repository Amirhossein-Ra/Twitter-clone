import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";

export default async function Home() {
  //News DATA
  const data = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  );
  const res = await data.json();
  const news = res.articles;


  // Random userSelect:
  const randomUsersResults = await fetch(
    "https://randomuser.me/api/?results=50&inc=name,login,picture"
  ).then((res) => res.json());

  return (
    <div className="">
      <main className="flex min-h-screen  mx-auto">
        {/* sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets articles={news} randomUsersResults={randomUsersResults.results} />
      </main>
    </div>
  );
}

// https://saurav.tech/NewsAPI/top-headlines/category/bussiness/us.json
