import { useEffect, useState } from "react";
import supabase from "./lib/supabaseClient";
import { Routes, Route } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

// Pages
import Project from "./pages/Project";
import Home from "./pages/Home";
import Collect from "./pages/Collect";
import Manage from "./pages/Manage";
import Customize from "./pages/Customize";
import Embed from "./pages/Embed";
import Auth from "./pages/Auth";
import TestiWall from "./components/customize/TestiWall";

// Components
import Sidebar from "./components/Sidebar";

function App() {
  let navigateTo = useNavigate();

  // console.log(supabase);
  let { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      console.log(`User: ${user.username}`);
    } else if (isLoaded && !isSignedIn) {
      console.log("No user signed in.");
    }
  }, [isLoaded, isSignedIn, user]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/app/*"
          element={<Layout auth={[isLoaded, isSignedIn, user]} />}
        />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/testiwall" element={<TestiWall user={user} />}></Route>
      </Routes>
    </>
  );
}

let Layout = (props) => {
  let navigateTo = useNavigate();

  // Destructuring props
  let { auth } = props;
  let [isLoaded, isSignedIn, user] = auth;

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigateTo('/auth/signUp');
    }
  }, [isLoaded])

  // Handling username
  let [userName, setUserName] = useState("No User");
  useEffect(() => {
    if (isSignedIn) {
      setUserName(user.username);
    } else {
      setUserName("No User");
    }
  }, [isLoaded])

  // Sidebar Status
  let [isSidebar, setSidebar] = useState(true);

  // Project name
  let [projectName, setProjectName] = useState('');
  let getProjectName = (pN) => {
    if (pN.length !== 0) {
      setProjectName(pN);
    } else {
      setProjectName("Idle");
    }
  }

  return (
    <>
      <div className="">
        {/* Sidebar */}
        <div className="absolute flex h-screen">
          <Sidebar isSidebar={isSidebar} username={userName} />
          <div
            className={`bg-[#D8C6FF] border-2 border-[#cab1ff] h-10 w-10 m-4 flex justify-center items-center rounded-md opacity-90 hover:opacity-100 active:opacity-100 transition-opacity`}
            onClick={() => {
              setSidebar(!isSidebar);
            }}
          >
            <div
              className={`transition-transform duration-200 ${isSidebar ? "rotate-180" : "0"
                }`}
            >
              <i className="ri-arrow-right-s-line text-3xl text-[#1C1D46] transition-transform"></i>
            </div>
          </div>
        </div>
        {/* Functional Screen */}
        <div className="flex-1 h-screen overflow-y-auto bg-[#F0F8FF]">
          <Routes>
            <Route path="/project" element={<Project getProjectName={getProjectName} user={user} />}></Route>
            <Route path="/collect" element={<Collect projectName={projectName} user={user} />} />
            <Route path="/manage" element={<Manage projectName={projectName} user={user} />} />
            <Route path="/customize" element={<Customize projectName={projectName} user={user} />} />
            <Route path="/embed" element={<Embed />} />
          </Routes>
        </div>
      </div>
    </>
  );
};


export default App;
