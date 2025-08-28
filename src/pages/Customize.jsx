import React, { useEffect } from "react";

// Component
import TestiWall from "../components/customize/TestiWall";

let Customize = (props) => {
  // Destructuring props
  let { projectName, user } = props;

  return (
    <>
      <div>
        <TestiWall projectName={projectName} user={user} />
      </div>
    </>
  );
};

export default Customize;