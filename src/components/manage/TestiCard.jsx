import React, { useEffect, useState } from 'react';

let TestiCard = (props) => {

  // Destructuring props
  let { data } = props;
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
      <div className='bg-white text-black font-space rounded border-2 border-zinc-200 my-2 p-4'>
        <h1 className='font-bricolage font-bold'>{author_name}</h1>
        <h2 className='text-zinc-600'>{author_role}</h2>
        <p className='font-semibold'>{content}</p>
        <h2 className='text-center'>{ratingStar.map((v, i, a) => <i key={i} className="ri-star-fill text-amber-400"></i>)}</h2>

      </div>
    </>
  )
}

export default TestiCard;