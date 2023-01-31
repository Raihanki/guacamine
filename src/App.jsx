import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import SimpleCard from "./components/SimpleCard";
import Table from "./components/Table";
import Topbar from "./components/Topbar";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("DarkMode") ?? false)
  );

  const toggleSidebar = useCallback(
    () => setSidebarOpen((prevState) => !prevState),
    []
  );

  const toggleDarkMode = useCallback(
    () => setDarkMode((prevState) => !prevState),
    []
  );

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } antialiased w-full h-full bg-gray-200 flex`}
    >
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } h-screen absolute lg:static`}
      >
        <Sidebar toggleSidebar={toggleSidebar}></Sidebar>
      </div>
      <div className="py-5 px-6 lg:px-8 flex-1 h-screen">
        <Topbar
          toggleSidebar={toggleSidebar}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        ></Topbar>
        <SimpleCard className="mb-5">
          <div className="flex flex-col">
            <h1 className="text-3xl capitalize font-semibold text-stone-600 mb-5">
              products
            </h1>
            <Table />
          </div>
        </SimpleCard>
        <SimpleCard>
          <div className="flex flex-col">
            <h1 className="text-3xl capitalize font-semibold text-stone-600 mb-5">
              buttons
            </h1>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </SimpleCard>
      </div>
    </div>
  );
}
