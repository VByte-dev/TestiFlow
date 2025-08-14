import React from "react";

let Manual = (props) => {
  // Destructuring props
  let { isActive } = props;

  return (
    <>
      <div className={`border-2 bg-white border-zinc-100 rounded-lg p-4 text-sm lg:text-base font-space ${isActive !== "manual" ? "hidden" : ""}`}>
        <div>
          <input
            type="text"
            placeholder="Author name"
            className="w-full rounded border-2 border-zinc-100 outline-none text-black h-12 my-1  font-semibold p-4"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Author role"
            className="w-full rounded border-2 border-zinc-100 outline-none text-black h-12 my-1  font-semibold p-4"
          />
        </div>
        <div>
          <textarea
            placeholder="Write the testimonial..."
            className="w-full border-2 border-zinc-100 rounded outline-none text-black h-24 my-1  font-semibold p-4"
          ></textarea>
        </div>
        <div>
          <input
            type="number"
            placeholder="Rating (1–5)"
            className="w-full border-2 border-zinc-100 rounded outline-none text-black h-12  font-semibold p-4"
          />
        </div>
        <div>
          <button className="bg-black font-space w-full py-2 rounded mt-4">
            Add Testimonial
          </button>
        </div>
      </div>
    </>
  );
};

export default Manual;
