import React, { useEffect } from "react";

let Customize = (props) => {
  // Destructuring props
  let { projectName } = props;

  return (
    <>
      <div className="h-full mt-20 mx-4">
        <iframe src={`http://localhost:5173/testiwall?projectName=${projectName}`} className="w-full h-full"></iframe>
      </div>
    </>
  );
};

export default Customize;