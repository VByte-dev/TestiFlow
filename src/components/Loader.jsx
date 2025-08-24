import React, { useEffect, useState } from 'react';

let Loader = () => {

  let [loaderPlace, setLoaderPlace] = useState("");

  const funnyLoaders = [
    "🚀 Loading your projects...",
    "🪄 Fetching some magic...",
    "☕ Brewing fresh testimonials...",
    "📦 Packing feedback for you...",
    "⚡ Spinning up your flow...",
    "🐌 Still faster than your WiFi...",
    "🔮 Summoning happy customers...",
    "🍿 Popcorn break while we load...",
    "🛠️ Fixing imaginary bugs...",
    "😅 Almost there..."
  ];

  useEffect(() => {
    let randLoaderPlace = funnyLoaders[Math.floor(Math.random() * funnyLoaders.length)];
    setLoaderPlace(randLoaderPlace);
  }, []);

  return (
    <>
      <div className='select-none border-2 border-amber-200 rounded text-zinc-600 bg-amber-100 py-4 text-sm lg:text-base text-center font-bricolage mx-2'>
        <h1 className='truncate'>{loaderPlace}</h1>
      </div>
    </>
  )
}

export default Loader;