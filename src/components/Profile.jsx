import React from "react";

let Profile = (props) => {
  // Destructuring props
  let {username} = props;
  
  return (
    <>
      <div className="flex gap-3 rounded-md items-center bg-black m-4 p-2 h-14 overflow-hidden">
        <div className="bg-amber-300 h-8 w-8 rounded-full shrink-0"></div>
        <h1 className="font-bricolage text-white text-lg truncate">{username}</h1>
      </div>
    </>
  );
};

export default Profile;
