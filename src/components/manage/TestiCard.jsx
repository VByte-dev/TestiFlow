import React, { useEffect, useState } from 'react';

let TestiCard = (props) => {

  // Destructuring props
  let { data, deleteTestimonial } = props;
  // console.log(data);

  // Destructuring data
  let { author_name, author_role, content, rating } = data;

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
      <div className='bg-white text-black font-space rounded-md border-2 border-zinc-100 my-2 p-4'>
        <div className='flex justify-end'>
          <div className='bg-[#D8C6FF] border-2 border-[#cab1ff] h-10 w-10 flex justify-center items-center text-zinc-700 rounded active:motion-preset-pop motion-duration-75 active:bg-[#cab1ff]' onClick={() => {
            deleteTestimonial();
          }}>
            <i className="ri-delete-bin-line text-lg"></i>
          </div>
        </div>
        <div className='px-2'>
          <h1 className='font-bricolage font-bold text-lg my-2'>Author: {author_name}</h1>
          <h2 className='text-zinc-800 font-medium text-base'>Role: {author_role}</h2>
          <p className='text-zinc-800 font-medium text-base '>Message: {content}</p>
          <h2 className='flex gap-1 text-lg'>
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