import React from "react";

let projectCard = (props) => {
  // Destructuring props
  let { data } = props;

  let {project_name} = data;

  return (
    <>
      <div className="overflow-auto">
        <div className="bg-white active:bg-[#D8C6FF] font-bricolage text-zinc-800 border-2 border-[#D8C6FF] active:border-[#cab1ff] text-center rounded py-2 m-2">
          <h1 className="truncate">{project_name}</h1>
        </div>
      </div>
    </>
  )
}

export default projectCard;