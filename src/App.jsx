import { useState } from "react";
import supabase from "./lib/supabaseClient";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Collect from "./pages/Collect";
import Manage from "./pages/Manage";
import Customize from "./pages/Customize";
import Embed from "./pages/Embed";

// Components
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app/*" element={<Layout />} />
      </Routes>
    </>
  );
}

let Layout = () => {
  // Handle Sidebar
  let [isSidebar, setSidebar] = useState(true);
  console.log(supabase);
  return (
    <>
      <div className="">
        {/* Sidebar */}
        <div className="absolute flex h-screen">
          <Sidebar isSidebar={isSidebar} />
          <div
            className={`bg-[#D8C6FF] border-2 border-[#cab1ff] h-10 w-10 m-4 flex justify-center items-center rounded-md opacity-90 hover:opacity-100 active:opacity-100 transition-opacity`}
            onClick={() => {
              setSidebar(!isSidebar);
            }}
          >
            <div
              className={`transition-transform duration-200 ${
                isSidebar ? "rotate-180" : "0"
              }`}
            >
              <i className="ri-arrow-right-s-line text-3xl text-[#1C1D46] transition-transform"></i>
            </div>
          </div>
        </div>
        {/* Functional Screen */}
        <div className="flex-1 overflow-y-auto bg-[#F0F8FF]">
          <Routes>
            <Route path="/collect" element={<Collect />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/customize" element={<Customize />} />
            <Route path="/embed" element={<Embed />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
