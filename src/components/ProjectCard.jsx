import React from "react";

let projectCard = (props) => {
  // Destructuring props
  let { data, handleProjectName } = props;

  let { project_name } = data;

  return (
    <>
      <div className="overflow-auto" onClick={() => {
        handleProjectName(project_name)
      }}>
        <div className="bg-[#D8C6FF] active:bg-[#cab1ff] font-bricolage text-zinc-800 border-2 border-[#cab1ff] text-center rounded py-2 m-2">
          <h1 className="truncate">{project_name}</h1>
        </div>
      </div>
    </>
  )
}

export default projectCard;