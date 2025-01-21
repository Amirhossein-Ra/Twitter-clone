"use client";
import { BiSearch } from "react-icons/bi";
import News from "./News";
import { useState } from "react";

export default function Widgets({ articles, randomUsersResults }) {
  const [articleNum, setArticleNum] = useState(3);
  const [randomUserNum, setRandomUserNum] = useState(3);

  return (
    <div className="xl:w-[600px] hidden sm:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full bg-red-100 relative">
          <BiSearch className="h-5 w-5 z-50 text-gray-500" />
          <input
            type="text"
            placeholder="Search Twitter"
            className=" absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
          />
        </div>
      </div>

      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Whats Happening</h4>
        {articles.slice(0, articleNum).map((elem) => {
          return <News key={elem.title} article={elem} />;
        })}
        <button
          onClick={() => setArticleNum(articleNum + 3)}
          className="text-blue-300 pl-4 hover:text-blue-400"
        >
          Show More
        </button>
      </div>
      <div className="text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4 ">who to follow</h4>
        {randomUsersResults.slice(0, randomUserNum).map((elem) => {
          return (
            <div
              key={elem.login.username}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200 transition duration-200"
            >
              <img
                className="rounded-full"
                width="50"
                height="50"
                src={elem.picture.thumbnail}
                alt=""
              />
              <div className="truncate ml-4 leading-5">
                <h4 className="font-bold hover:underline text-[14px] truncate">
                  {elem.login.username}
                </h4>
                <h5 className="text-gray-500 text-[13px] truncate">
                  {elem.name.first + " " + elem.name.last}
                </h5>
              </div>
              <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
                follow
              </button>
            </div>
          );
        })}
        <button
          onClick={() => {
            setRandomUserNum(randomUserNum + 3);
          }}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400 "
        >
          show more
        </button>
      </div>
    </div>
  );
}
