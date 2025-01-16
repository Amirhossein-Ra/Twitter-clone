import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
export default function Feed() {
  return (
    <div className="xl:ml-[370px] border-gray-200 sm:ml-[73px] border-l border-r xl:min-w-[576px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 items-center sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-start justify-center px-0 ml-auto w-9 h-9">
          <HiOutlineSparkles className="" />
        </div>
      </div>
    </div>
  );
}
