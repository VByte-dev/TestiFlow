import React, { useState } from 'react';

let Notice = (props) => {
  // Destructuring props
  let { message } = props;

  return (
    <>
      <div className={`border-2 border-amber-200 rounded text-zinc-600 bg-amber-100 py-4 text-sm lg:text-base text-center ${message === "" ? "hidden" : ""}
      `}>
        <h1 className='font-bricolage'>{message}</h1>
      </div>
    </>
  )
}

export default Notice;