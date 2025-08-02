import React from "react";

// Components
import ProjectName from "../components/ProjectName";

let Collect = () => {
  return (
    <>
      <div className="">
        {/* ProjectName */}
        <section className="my-8 mx-8 md:my-10 md:mx-10 flex justify-end">
          <ProjectName />
        </section>
      </div>
    </>
  );
};

export default Collect;
