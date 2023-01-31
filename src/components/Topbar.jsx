import { IconMenu2, IconMoon, IconSun } from "@tabler/icons";
import React from "react";

export default function Topbar({ toggleSidebar, toggleDarkMode, darkMode }) {
  return (
    <div className="flex pb-5 justify-between items-center">
      <div className="flex items-center gap-x-8">
        <div>
          <span className="text-stone-900">
            <IconMenu2
              className="w-7 h-7 cursor-pointer"
              onClick={toggleSidebar}
            />
          </span>
        </div>
        <div className="hidden md:block">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="px-3 py-2 rounded-md shadow-xs outline-none border border-gray-400 focus:ring-1 focus:ring-blue-400 w-96"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="mr-4 cursor-pointer" onClick={toggleDarkMode}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </div>
        <div className="flex flex-col cursor-pointer">
          <div className="flex justify-end">
            <span className="text-stone-800 text-lg tracking-tight">
              Raihan Khoerul Imam
            </span>
          </div>
          <div className="flex justify-end">
            <span className="text-stone-600 tracking-tight">Admin</span>
          </div>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/150"
            alt="logo"
            className="w-14 h-14 rounded-full shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
