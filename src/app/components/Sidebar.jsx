import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import {
  FaBell,
  FaHashtag,
  FaHome,
  FaInbox,
  FaRegBookmark,
  FaRegClipboard,
  FaRegUser,
} from "react-icons/fa";
import {
  HiDotsHorizontal,
  HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* twitter logo */}

      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1 xl:py-2">
        <Image
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"
          width="40"
          height="40"
        ></Image>
      </div>

      {/* menu */}
      <div className="mt-4 mb-2.5 xl:items-start flex flex-col justify-center items-start">
        <SidebarMenuItem text="Home" Icon={FaHome} active />
        <SidebarMenuItem text="Explore" Icon={FaHashtag} />
        <SidebarMenuItem text="Notifications" Icon={FaBell} />
        <SidebarMenuItem text="Messages" Icon={FaInbox} />
        <SidebarMenuItem text="BookMarks" Icon={FaRegBookmark} />
        <SidebarMenuItem text="Lists" Icon={FaRegClipboard} />
        <SidebarMenuItem text="Profile" Icon={FaRegUser} />
        <SidebarMenuItem text="More" Icon={HiOutlineDotsCircleHorizontal} />
      </div>
      {/* button */}

      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* mini profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          className="h-14 w-14 rounded-full xl:mr-2 "
          src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png"
          alt="profile"
        />
        <div className="leading-5 ">
          <h4 className="font-bold">AmirHosseinRahzany</h4>
          <p className="text-gray-500">@amir8291</p>
        </div>
        <HiDotsHorizontal className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}
