import React, { useState, useEffect } from "react";

let TestiCard = (props) => {
  // Destructuring props
  let { data } = props;

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
    <div className="break-inside-avoid rounded-xl bg-zinc-100 shadow-sm p-4 mb-4 hover:scale-[1.01] transition-transform">
      <h1 className="text-black font-bricolage font-bold text-lg">
        <span className="text-zinc-800">{author_name}</span>
      </h1>
      <h2 className="text-zinc-900 font-space text-sm mb-2">
        <span className="text-zinc-600">{author_role}</span>
      </h2>
      <p className="text-zinc-700 font-space text-base overflow-hidden">{content}</p>
      <div className="mt-4 flex justify-center">
        {ratingStar.map((v, i) => (
          <i key={i} className="ri-star-fill text-amber-400"></i>
        ))}
      </div>
    </div>
  );
};

export default TestiCard;
