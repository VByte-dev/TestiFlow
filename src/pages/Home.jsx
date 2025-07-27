import React from "react";
import { Link } from "react-router-dom";

let Home = () => {
  return (
    <>
      <div className="my-8 md:my-14 selection:bg-[#ff69b4] selection:text-black">
        {/* Header */}
        <div className="px-4 sm:px-6 lg:px-30 text-center rounded-full py-3 mt-10">
          <h1 className="font-bricolage font-extrabold text-xl sm:text-2xl text-left selection:bg-black selection:text-white">
            Testiflow<span className="text-[#ffd700]">.</span>
          </h1>
        </div>

        {/* Hero */}
        <section className="mt-20 md:mt-40 px-4 sm:px-8 md:px-20 lg:px-50 mx-2 sm:mx-6 md:mx-20 lg:mx-30">
          <h1 className="font-bold text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas leading-tight">
            Got <span className="text-[#ffd700]">testimonials</span> but no
            clean way to show them!
          </h1>

          {/* Subheading */}
          <h1 className="text-sm sm:text-base md:text-xl text-center mt-4 mx-2 sm:mx-6 md:mx-12 opacity-90 font-space">
            TestiFlow turns scattered feedback into beautiful, high-converting
            social proof - perfect for early builders who need to build trust
            <span className="text-[#ffd700]">
              {" "}
              without burning time or budget.
            </span>
          </h1>
          {/* Waitlist CTA using Formspree */}
          <form
            action="https://formspree.io/f/xovlwqev"
            method="POST"
            className="mt-10 w-full max-w-xl mx-auto px-4 flex flex-col sm:flex-row items-center"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your best email"
              className="border-y-2 border-x-2 border-[#ff1493] font-space px-4 py-2 outline-none w-full sm:w-2/3"
            />
            <button
              type="submit"
              className="border-2 border-[#ff1493] bg-[#ff1493] active:bg-pink-700 font-space text-white px-4 py-2 w-full sm:w-1/3 mx-2 my-2"
            >
              Join Waitlist
            </button>
          </form>

          <p className="font-space opacity-90 text-center mt-8 text-sm sm:text-base md:text-base">
            🌿 Join early, because the best tools are built with you.
          </p>

          {/* Quote */}
          <div className="text-center mt-20 md:mt-40 mb-20 md:mb-40 px-4 sm:px-8 md:px-20 lg:px-30">
            <h1 className="font-bricolage text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug">
              “Turn feedback into fuel with TestiFlow, without{" "}
              <span className="text-[#ffd700]">burning</span> your wallet on
              bloated tools.”
            </h1>
          </div>

          {/* Founder Story */}
          <div className="mt-20 md:mt-40 text-center px-4 sm:px-6 md:px-12 lg:px-0">
            <h1 className="font-bebas text-2xl sm:text-3xl md:text-4xl">
              🪴 Why I Built <span className="text-[#ffd700]">TestiFlow</span>
            </h1>
            <p className="font-bricolage text-sm sm:text-base md:text-xl mt-6 md:mt-8 opacity-90 leading-relaxed px-2 sm:px-4 md:px-20">
              I just needed a simple way to show what people say about my
              product. But every testimonial tool I found was packed with
              <span className="text-[#ffd700]">
                {" "}
                features I didn’t need
              </span>{" "}
              and pricing I couldn’t justify.
              <span className="text-[#ffd700]"> Why pay so much</span> for what
              should be simple? That frustration pushed me to build{" "}
              <span className="text-[#ffd700]">TestiFlow</span>, a tool that
              <span className="text-[#ffd700]">
                {" "}
                turns feedback into fuel
              </span>{" "}
              without burning your budget. I’m building it for myself, and for
              every maker who's tired of overpaying for basic tools.
            </p>
            <div className="text-right flex items-center justify-end mt-4 md:mt-8 mr-4 md:mr-8">
              <h2 className="font-space text-zinc-300 text-sm lg:text-base">
                {" "}
                ~ VByte
              </h2>
            </div>
          </div>
        </section>

        {/* Socials */}
        <section className="flex justify-center gap-6 text-xl mt-20 md:mt-24 mb-16">
          <Link to={"https://x.com/VByteDev"} target="_blank">
            <i className="ri-twitter-x-line hover:text-[#ff69b4] hover:translate-y-[-4px] transition-transform active:text-[#ff1493]"></i>
          </Link>
          <Link to={"https://vbyte-dev.vercel.app"} target="_blank">
            <i className="ri-global-line hover:text-[#ff69b4] hover:translate-y-[-4px] transition-transform active:text-[#ff1493]"></i>
          </Link>
          <Link
            to={"https://www.linkedin.com/in/vedhesh-narayanan-m-750a52283/?original_referer=https%3A%2F%2Fvbyte-dev.vercel.app%2F"}
            target="_blank"
          >
            <i className="ri-linkedin-fill hover:text-[#ff69b4] hover:translate-y-[-4px] transition-transform active:text-[#ff1493]"></i>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
