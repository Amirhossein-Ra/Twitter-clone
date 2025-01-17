import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import Input from "./Input";
import Post from "./Post";
export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Amir Rahzany",
      username: "codewithamir",
      userImage:
        "https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png",
      img: "https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/e2e0e62f-0064-4f86-b9d8-5a55cb7110ca/Korembi-January-2024.jpg?format=750w",
      text: "nice view",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Amir Rahzany",
      username: "codewithamir",
      userImage:
        "https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg",
      text: "nice view",
      timestamp: "2 hours ago",
    },
    {
      id: "3",
      name: "Amir Rahzany",
      username: "codewithamir",
      userImage:
        "https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png",
      img: "https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/e2e0e62f-0064-4f86-b9d8-5a55cb7110ca/Korembi-January-2024.jpg?format=750w",
      text: "nice view",
      timestamp: "2 hours ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-gray-200 sm:ml-[73px] border-l border-r xl:min-w-[576px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 items-center sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-start justify-center px-0 ml-auto w-9 h-9">
          <HiOutlineSparkles className="" />
        </div>
      </div>
      <Input />
      {posts.map((elem) => {
        return <Post key={elem.id} post={elem}/>;
      })}
    </div>
  );
}
