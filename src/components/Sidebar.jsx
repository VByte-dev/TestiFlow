import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

// Components
import Profile from "./Profile";
import Project from "./Project";
import LogOut from "./LogOut";

let Sidebar = (props) => {
  // Destructuring Props
  let { isSidebar } = props;

  // Navigation
  let navigateTO = useNavigate();

  return (
    <>
      <div
        className={` w-60 bg-[#D8C6FF] relative select-none ${
          isSidebar ? " " : "hidden"
        }`}
      >
        {/* Profile */}
        <Profile />

        {/* Project */}
        <div className="my-8">
          <Project />
        </div>

        {/* Features */}
        <div id="features" className="my-10 font-dmsans">
          {/* Collect */}
          <NavLink to="/app/collect">
            {({ isActive }) => (
              <div
                className={`text-[#1C1D46] py-2 px-4 m-4 rounded flex gap-4 items-center ${
                  isActive ? "bg-[#F0F8FF]" : "bg-[#D8C6FF]"
                }`}
              >
                <i className="ri-import-line text-lg"></i>
                <h2 className="text-lg">Collect</h2>
              </div>
            )}
          </NavLink>

          {/* Manage */}
          <NavLink to="/app/manage">
            {({ isActive }) => (
              <div
                className={`text-[#1C1D46] py-2 px-4 m-4 rounded flex gap-4 items-center ${
                  isActive ? "bg-[#F0F8FF]" : "bg-[#D8C6FF]"
                }`}
              >
                <i className="ri-filter-3-line text-lg"></i>
                <h2 className="text-lg">Manage</h2>
              </div>
            )}
          </NavLink>

          {/* Customize */}
          <NavLink to="/app/customize">
            {({ isActive }) => (
              <div
                className={`text-[#1C1D46] py-2 px-4 m-4 rounded flex gap-4 items-center ${
                  isActive ? "bg-[#F0F8FF]" : "bg-[#D8C6FF]"
                }`}
              >
                <i className="ri-pencil-line text-lg"></i>
                <h2 className="text-lg">Customize</h2>
              </div>
            )}
          </NavLink>

          {/* Embed */}
          <NavLink to="/app/embed">
            {({ isActive }) => (
              <div
                className={`text-[#1C1D46] py-2 px-4 m-4 rounded flex gap-4 items-center ${
                  isActive ? "bg-[#F0F8FF]" : "bg-[#D8C6FF]"
                }`}
              >
                <i className="ri-clipboard-line text-lg"></i>
                <h2 className="text-lg">Embed</h2>
              </div>
            )}
          </NavLink>
        </div>

        {/* LogOut */}
        <div className="absolute w-full bottom-4">
          <LogOut />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
