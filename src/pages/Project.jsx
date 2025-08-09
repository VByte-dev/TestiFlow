import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let Project = (props) => {
  // Destructuring props
  let { getProjectName } = props;
  useEffect(() => {
    getProjectName('');
  }, []);

  let navigateTo = useNavigate();

  return (
    <>
      <div className="flex justify-center py-40 text-black px-4 sm:px-0">
        <div className="w-full max-w-md">
          {/* Existing Project */}
          <div>
            <div className="border-2 border-[#cab1ff] rounded-md py-2 min-h-100 select-none">
              {/* Existing project */}
              <div className="overflow-auto">
                <div className="bg-white active:bg-[#D8C6FF] font-bricolage text-zinc-800 border-2 border-[#D8C6FF] active:border-[#cab1ff] text-center rounded py-2 m-2">
                  <h1 className="truncate">Sweply</h1>
                </div>
              </div>
            </div>
            <div className="mt-3 w-full">
              <button className="bottom-0 rounded w-full bg-[black] h-10 text-white font-space" onClick={() => {
                navigateTo('/app/collect')
              }}>
                Select Project
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-20">
              <div className="flex-grow border-1 border-[black]"></div>
              <span className="mx-3 text-sm text-black font-bricolage">OR</span>
              <div className="flex-grow border-1 border-[black]"></div>
            </div>
          </div>
          {/* New Project */}
          <div className="font-space">
            <input
              type="text"
              placeholder="Name your project"
              className="border-b-2 border-[#cab1ff] w-full outline-none"
            />
            <button className="bottom-0 rounded bg-[black] h-10 mt-4 text-white w-full" onClick={() => {
              navigateTo('/app/collect')
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
