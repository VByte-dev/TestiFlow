import React from "react";

// Components
import ProjectName from "../components/ProjectName";

let Collect = (props) => {
  // Destructuring props
  let { projectName } = props;
  // console.log("Project Name: ", projectName);

  return (
    <>
      <div className="">
        <section className="my-8 mx-8 md:my-10 md:mx-10 flex justify-end">
          <ProjectName projectName={projectName} />
        </section>

        {/* Methods to import feedback */}
        <section className="mx-8 lg:mx-80 mt-30">
          <h1 className="font-bricolage text-zinc-600 text-md md:text-lg mb-8">Bring in testimonials from various sources, all in one place.</h1>
          {/* Add manually */}
          <div className="bg-[#D8C6FF] border-2 border-[#cab1ff] my-6 px-4 py-2 lg:py-4 rounded cursor-pointer active:bg-[#cab1ff]">
            <h1 className="text-zinc-900 font-bricolage text-center">Add manually</h1>
          </div>
          {/* Import CSV
          <div className="bg-[#D8C6FF] border-2 border-[#cab1ff] px-6 py-2 lg:py-4 rounded cursor-pointer active:bg-[#cab1ff]">
            <h1 className="text-zinc-900 font-bricolage text-center">Import CSV</h1>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Collect;
