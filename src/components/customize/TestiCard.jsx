import React, { useState, useEffect } from "react";

let TestiCard = (props) => {
  // Destructuring props
  let { data } = props;
  // console.log(data);

  // Destructuring data
  let { author_name, author_role, content, rating, created_at } = data;

  // Handling the rating
  let [ratingStar, setRatingStar] = useState([]);
  useEffect(() => {
    let stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push("⭐");
    }
    setRatingStar(stars);
  }, [rating]);

  return (
    <>
      <div className="w-100">
        <div className='px-4 border-2 rounded-md py-2 border-zinc-200 bg-zinc-100 m-2'>
          <h1 className='text-black font-bricolage font-bold text-lg my-2'>Author: <span className='text-zinc-800'>{author_name}</span></h1>
          <h2 className='text-zinc-900 font-medium text-base'>Role: <span className='text-zinc-600'>{author_role}</span></h2>
          <p className='text-zinc-900 font-medium text-base '>Message: <span className='text-zinc-600'> {content}</span></p>
          <h2 className='flex gap-1 text-lg truncate'>
            {ratingStar.map((v, i) => (
              <i key={i} className="ri-star-fill text-amber-400 mt-2"></i>
            ))}
          </h2>
        </div>
      </div>
    </>
  )
}

export default TestiCard;