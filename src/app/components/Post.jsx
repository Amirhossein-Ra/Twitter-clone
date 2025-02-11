import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import {
  BsBarChart,
  BsChatDots,
  BsHeart,
  BsShare,
  BsTrash,
} from "react-icons/bs";

export default function Post({ post }) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200 ">
      {/* user image */}
      <img
        className="h-11 w-11 rounded-full mr-4 "
        src={post.userImage}
        alt="user image"
      />

      {/* right side */}
      <div className="">
        {/* header */}
        <div className="flex items-center justify-between">
          {/* user info */}
          <div className="flex space-x-1 items-center whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {post.timestamp}
            </span>
          </div>

          {/* dot icon */}
          <BiDotsHorizontal className="hoverEffect h-10 w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>

        {/* post text */}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2 ">
          {post.text}
        </p>

        {/* post image */}
        <img className="rounded-2xl mr-2 " src={post.img} alt="post image" />

        {/* icons */}

        <div className="flex justify-between text-gray-500 p-2 ">
          <BsChatDots className=" rounded-[16.5px] p-2 hover:text-sky-500 hover:bg-sky-100  h-9 w-9" />
          <BsTrash className=" rounded-[16.5px] p-2 hover:text-red-600 hover:bg-red-100  h-9 w-9" />
          <BsHeart className=" rounded-[15px] p-2 hover:text-red-600 hover:bg-red-100  h-9 w-9" />
          <BsShare className=" rounded-[12px] p-2 hover:text-sky-500 hover:bg-sky-100  h-9 w-9" />
          <BsBarChart className=" rounded-[16.5px] p-2 hover:text-sky-500 hover:bg-sky-100  h-9 w-9" />
        </div>
      </div>
    </div>
  );
}
