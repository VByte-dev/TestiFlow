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
      stars.push("⭐");
    }
    setRatingStar(stars);
  }, [rating]);

  return (
    <div
      className="break-inside-avoid rounded-xl shadow-sm p-4 mb-4 hover:scale-[1.01] transition-transform"
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
          <i key={i} className="ri-star-fill text-amber-400"></i>
        ))}
      </div>
    </div>
  );
};

export default TestiCard;
