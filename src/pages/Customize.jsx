import React, { useEffect } from "react";

let Customize = (props) => {
  // Destructuring props
  let { projectName } = props;

  return (
    <>
      <div className="h-full mt-20 mx-4 pt-2 lg:mx-30">
        <iframe src={`https://usetestiflow.vercel.app?projectName=${projectName}`} className="w-full h-full"></iframe>
      </div>
    </>
  );
};

export default Customize;