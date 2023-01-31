import {
  IconBrandSupernova,
  IconCalculator,
  IconHome,
  IconMovie,
  IconUsers,
  IconX,
} from "@tabler/icons";
import React from "react";

export default function Sidebar({ toggleSidebar }) {
  const menu = [
    { name: "Dashboard", icon: <IconHome /> },
    { name: "Account", icon: <IconUsers /> },
    { name: "List Movies", icon: <IconMovie /> },
    { name: "Products", icon: <IconBrandSupernova /> },
    { name: "Calculator", icon: <IconCalculator /> },
  ];

  return (
    <div className="min-h-screen border-r border-stone-300 w-64 px-9 shadow space-y-20 py-10 bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-x-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 dark:text-stone-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl text-stone-800 dark:text-stone-200">
              Gekiyoo
            </h1>
          </div>
        </div>
        <div
          className="flex lg:hidden text-stone-800 dark:text-stone-200"
          onClick={toggleSidebar}
        >
          <IconX className="cursor-pointer" />
        </div>
      </div>

      <div className="text">
        <div className="mb-4">
          <h1 className="text-md text-stone-900 dark:text-stone-200 font-semibold uppercase tracking-tight">
            Menu
          </h1>
        </div>
        <ul>
          {menu.map((val, index) => (
            <li
              className={`mb-5 flex flex-row items-center gap-x-3 cursor-pointer hover:text-stone-800 dark:hover:text-stone-200 ${
                val.name === "Dashboard"
                  ? "border-l-4 pl-2 border-stone-500 text-stone-900 dark:text-stone-200"
                  : "text-stone-500 dark:text-stone-400"
              }`}
              key={index}
            >
              <div>
                <span>{val.icon}</span>
              </div>
              <div>
                <span>{val.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <div className="mb-4">
          <h1 className="text-md text-stone-900 dark:text-stone-200 font-semibold uppercase tracking-tight">
            Another Menu
          </h1>
        </div>
        <ul>
          {menu.map((val, index) => (
            <li
              className={`mb-5 text-stone-500 dark:text-stone-400 flex flex-row items-center gap-x-3 cursor-pointer hover:text-stone-900 dark:hover:text-stone-200`}
              key={index}
            >
              <div>
                <span>{val.icon}</span>
              </div>
              <div>
                <span>{val.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
