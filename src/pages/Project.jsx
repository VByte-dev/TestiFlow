import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../lib/supabaseClient";

// Components
import ProjectCard from "../components/ProjectCard";

let Project = (props) => {
  // Destructuring props
  let { getProjectName } = props;

  // Handling project name
  let handleProjectName = (pN) => {
    // console.log("Project name:", pN);
    getProjectName(pN);
    navigateTo('/app/collect')
  }

  // Handling new project name
  let [nProjectName, setNProjectName] = useState("");
  let handleNewProjectName = (e) => {
    setNProjectName(e.target.value);
  }

  // Fetching project from supabase
  let [project, setProject] = useState([]);
  let fetchData = async () => {
    let { data, error } = await supabase
      .from('testiflow')
      .select("*");

    if (!error) {
      setProject(data);
      console.log("Data", data);
    } else {
      console.log(error.message);
    }
  };


  useEffect(() => {
    fetchData();
  }, [])

  let navigateTo = useNavigate();

  return (
    <>
      <div className="flex justify-center py-40 text-black px-4 sm:px-0">
        <div className="w-full max-w-md">
          {/* Existing Project */}
          <div>
            <div className="border-2 border-[#cab1ff] rounded-md py-2 min-h-100 select-none">
              {/* Existing project */}
              {
                project.length !== 0 ? <section>
                  <h1 className="text-center font-bricolage text-zinc-900 mt-10">🚀 No active projects</h1> <h1 className="mt-4 font-bricolage text-center mx-4 rounded py-4 text-zinc-600 bg-amber-100 border-2 border-amber-200">Start your next project below</h1>
                </section> : project.map((v, i, a) => <ProjectCard data={v} key={i} handleProjectName={handleProjectName} />)
              }

            </div>

            {/* Divider */}
            <div className="flex items-center mt-20 mb-8">
              <h2 className="font-bricolage text-zinc-700 text-md md:text-lg">Your next project begins here</h2>
            </div>
          </div>
          {/* New Project */}
          <div className="font-space">
            <input
              type="text"
              placeholder="Name your project"
              className="border-b-2 border-[#cab1ff] w-full outline-none"
              onChange={(e) => {
                handleNewProjectName(e)
              }}
            />
            <button className="bottom-0 rounded bg-[black] h-10 mt-4 text-white w-full" onClick={() => {
              getProjectName(nProjectName);
              navigateTo('/app/collect');
            }}>
              Start Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
