import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import ProjectName from "../components/ProjectName";
import Notice from "../components/Notice";
import Manual from "../components/collect/Manual";
import Loader from "../components/Loader";

let Collect = (props) => {

  let navigateTo = useNavigate();

  // Destructuring props
  let { projectName, user } = props;
  // console.log("Project Name: ", projectName);

  // Notice message
  let [noticeMsg, setNoticeMsg] = useState("");

  // Active method - Detect which method is active
  let [methodActive, setActive] = useState("");

  // Handle idle project
  let handleIdle = () => {
    setNoticeMsg("⚠️ Select a project to continue");
  }

  // Loader state
  let [isLoading, setIsLoading] = useState(true);

  // Loader
  let loader = (a) => {
    setIsLoading(a);
  }

  return (
    <>
      <div className="my-10">
        {/* Project Name */}
        <section className="my-8 mx-8 md:my-10 md:mx-10 flex justify-end">
          <ProjectName projectName={projectName} />
        </section>

        {/* Notice message */}
        <section className="mx-8 lg:mx-80 mt-16">
          <Notice message={noticeMsg} />
        </section>

        {/* Methods to import feedback */}
        <section className="mx-8 lg:mx-80 mt-16">

          <h1 className="font-bricolage text-zinc-600 text-md md:text-lg mb-8">Bring in testimonials from various sources, all in one place.</h1>

          {/* Add manually */}
          <div>
            <div className="bg-[#D8C6FF] border-2 border-[#cab1ff] my-6 px-4 py-2 lg:py-4 rounded cursor-pointer active:bg-[#cab1ff]" onClick={() => {
              if (projectName !== "" && projectName !== "Idle") {
                setActive("manual");
              } else {
                setActive("closeManual");
                handleIdle();
              }
            }}>
              <h1 className="text-zinc-900 font-bricolage text-center">Add manually</h1>
            </div>
            <Manual isActive={methodActive} user={user} projectName={projectName} setNoticeMsg={setNoticeMsg} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Collect;