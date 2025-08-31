import React, { useState, useEffect } from "react";

let TestiCard = (props) => {
  // Destructuring props
  let { data, theme } = props;

  // Default theme
  const defaultTheme = {
    bg: "#EADDFF",
    cardBg: "white",
    text: "#000000",
    accent: "#4F3B7E",
  };

  // Merge selected theme with default theme
  const appliedTheme = { ...defaultTheme, ...theme };

  // Destructuring data
  let { author_name, author_role, content, rating } = data;

  // Handling the rating
  let [ratingStar, setRatingStar] = useState([]);
  useEffect(() => {
    let stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(i);
    }
    setRatingStar(stars);
  }, [rating]);

  return (
    <div
      className="break-inside-avoid rounded-xl shadow-sm p-4 mb-4 hover:scale-[1.01] transition-colors duration-75"
      style={{ backgroundColor: appliedTheme.cardBg, color: appliedTheme.text }}
    >
      <h1
        className="font-bricolage font-bold text-lg"
        style={{ color: appliedTheme.text }}
      >
        {author_name}
      </h1>
      <h2
        className="font-space text-sm mb-2"
        style={{ color: appliedTheme.accent }}
      >
        {author_role}
      </h2>
      <p
        className="font-space text-base overflow-hidden"
        style={{ color: appliedTheme.text }}
      >
        {content}
      </p>
      <div className="mt-4 flex justify-center">
        {ratingStar.map((v, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-amber-400"
          >
            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 
              1.401 8.169L12 18.896l-7.335 3.861 
              1.401-8.169L.132 9.211l8.2-1.193z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestiCard;
