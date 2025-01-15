import React from "react";

export default function SidebarMenuItem({ text, Icon, active }) {
  return (
    <div className="flex items-center text-gray-700 justify-center hoverEffect xl:justify-start text-lg space-x-3">
      <Icon className="h-7 w-5" />
      <span className={`${active && "font-bold"} xl:inline-block hidden`}>
        {text}
      </span>
    </div>
  );
}
