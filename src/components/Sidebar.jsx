import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { SignOutButton } from "@clerk/clerk-react";

// Components
import Profile from "./Profile";

let Sidebar = (props) => {
  // Destructuring Props
  let { isSidebar, username } = props;
  // console.log("Username", username);

  return (
    <>
      <div
        className={` w-60 bg-[#D8C6FF] relative select-none shadow-xl ${isSidebar ? " " : "hidden"
          }`}
      >
        {/* Profile */}
        <Profile username={username} />

        {/* Project */}
        <div className="my-8 font-space">
          <NavLink to="/app/project">
            {({ isActive }) => (
              <div
                className={`bg-[#1C1D46] text-[white] py-2 px-6 m-4 rounded-md flex justify-between items-center"
                  }`}
              >
                <h2 className="text-lg">Project </h2>
                <i className="ri-folder-2-line text-lg"></i>
              </div>
            )}
          </NavLink>
        </div>

        {/* Features */}
        <div id="features" className="my-10">
          {/* Collect */}
          <NavLink to="/app/collect">
            {({ isActive }) => (
              <div
                className={`text-[#1C1D46] py-2 px-4 m-4 rounded flex gap-4 items-center ${isActive ? "bg-[#F0F8FF]" : "bg-[#D8C6FF]"
                  }`}
              >
                <i className="ri-import-line text-xl"></i>
                <h2 className="text-lg font-space font-semibold text-zinc-800 ">Collect</h2>
              </div>
            )}
          </NavLink>

          {/* Manage */}
          <NavLink to="/app/manage">
            {({ isActive }) => (
              <div
                className={`text-[#1C1D46] py-2 px-4 m-4 rounded flex gap-4 items-center ${isActive ? "bg-[#F0F8FF]" : "bg-[#D8C6FF]"
                  }`}
              >
                <i className="ri-filter-3-line text-xl"></i>
                <h2 className="text-lg font-space font-semibold text-zinc-800">Manage</h2>
              </div>
            )}
          </NavLink>

          {/* Customize */}
          <NavLink to="/app/customize">
            {({ isActive }) => (
              <div
                className={`text-[#1C1D46] py-2 px-4 m-4 rounded flex gap-4 items-center ${isActive ? "bg-[#F0F8FF]" : "bg-[#D8C6FF]"
                  }`}
              >
                <i className="ri-pencil-line text-xl"></i>
                <h2 className="text-lg font-space font-semibold text-zinc-800">Customize</h2>
              </div>
            )}
          </NavLink>

          {/* Embed */}
          {/* <NavLink to="/app/embed">
            {({ isActive }) => (
              <div
                className={`text-[#1C1D46] py-2 px-4 m-4 rounded flex gap-4 items-center ${isActive ? "bg-[#F0F8FF]" : "bg-[#D8C6FF]"
                  }`}
              >
                <i className="ri-clipboard-line text-xl"></i>
                <h2 className="text-lg font-space font-semibold text-zinc-800">Embed</h2>
              </div>
            )}
          </NavLink> */}
        </div>

        {/* LogOut */}
        <div className="absolute w-full bottom-4">
          <div className="bg-black m-4 rounded text-center font-space py-2">
            <SignOutButton />
          </div>
        </div>
      </div >
    </>
  );
};

export default Sidebar;
