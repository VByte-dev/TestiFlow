import React from "react";

let ProjectName = (props) => {
  // Destructuring props
  let { projectName } = props;

  // Checking weather the project is empty
  if (projectName.length === 0) {
    projectName = "Idle";
  }

  return (
    <>
      <div className=" flex gap-2 items-center bg-[#1C1D46] text-md w-30 h-8 md:w-40 md:h-10 font-bricolage rounded py-2 px-2 md:px-4 md:text-lg md:gap  overflow-hidden">
        <i className="ri-star-fill text-[#D8C6FF]"></i>
        <h1 className="truncate">{projectName}</h1>
      </div>
    </>
  );
};

export default ProjectName;