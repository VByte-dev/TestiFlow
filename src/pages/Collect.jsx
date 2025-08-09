import React from "react";

// Components
import ProjectName from "../components/ProjectName";

let Collect = (props) => {
  // Destructuring props
  let { projectName } = props;
  console.log("Project Name: ", projectName);

  return (
    <>
      <div className="">
        <section className="my-8 mx-8 md:my-10 md:mx-10 flex justify-end">
          <ProjectName projectName={projectName} />
        </section>
      </div>
    </>
  );
};

export default Collect;
