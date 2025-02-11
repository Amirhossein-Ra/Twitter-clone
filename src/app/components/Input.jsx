import React from "react";
import { HiPhotograph } from "react-icons/hi";
import { BiHappy } from "react-icons/bi";

export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png"
        alt="profile"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
      />
      <div className="w-full">
        <div className="divide-y divide-gray-200">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            rows="2"
            placeholder="Whats Happening?"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex ">
            <HiPhotograph className="hoverEffect h-10 w-10 p-2 text-sky-500 hover:bg-sky-100" />
            <BiHappy className="hoverEffect h-10 w-10 p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
