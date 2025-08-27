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
      <div className="">
        <div className='px-4 border-2 rounded-md py-2 border-zinc-200 bg-zinc-100 m-2 w-80 sm:w-100'>
          <h1 className='text-black font-bricolage font-bold text-lg mt-2'><span className='text-zinc-800'>{author_name}</span></h1>
          <h2 className='text-zinc-900 font-space text-base mb-4'><span className='text-zinc-600'>{author_role}</span></h2>
          <h3 className='text-zinc-900 font-space text-base  truncate hover:truncate-none'><span className='text-zinc-600 overflow-hidden'> {content}</span></h3>
          <h2 className='flex gap-1 text-lg truncate'>
            <div className="mt-4 w-full text-center">
              {ratingStar.map((v, i) => (
                <i key={i} className="ri-star-fill text-amber-400 mt-2"></i>
              ))}
            </div>
          </h2>
        </div>
      </div>
    </>
  )
}

export default TestiCard;