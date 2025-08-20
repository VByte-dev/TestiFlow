import React, { useEffect, useState } from "react";
import supabase from "../../lib/supabaseClient";

let Manual = (props) => {
  // Destructuring props
  let { isActive, user, projectName, setNoticeMsg } = props;

  // Destructuring User ID & Username
  let id = user?.id || null;
  let username = user?.username || null;

  useEffect(() => {
    id = user?.id || null;
    username = user?.username || null;
    console.log("ID: ", id, "Username: ", username);
  }, [props, user, projectName]);

  // Handling Inputs
  let [authName, setAuthName] = useState("");
  let [authRole, setAuthRole] = useState("");
  let [content, setContent] = useState("");
  let [rating, setRating] = useState("");

  let handleAuthName = (e) => {
    setAuthName(e.target.value);
  }
  let handleAuthRole = (e) => {
    setAuthRole(e.target.value);
  }
  let handleContent = (e) => {
    setContent(e.target.value);
  }
  let handleRating = (e) => {
    setRating(e.target.value);
  }

  // Pushing data to supabase
  let addTestimonial = async () => {
    if (authName.length > 0 && authRole.length > 0 && content.length > 0 && rating > 0 && rating < 6) {

      try {
        let { data, error } = await supabase
          .from('testiflow')
          .insert([
            {
              user_id: id,
              user_name: username,
              project_name: projectName,
              author_name: authName,
              author_role: authRole,
              content: content,
              rating: rating
            }
          ])

          .select();

        if (error) {
          console.log(error.message);
        } else {
          setNoticeMsg("✅ Testimonial added successfully!");

          // Clearing the values after the push
          setAuthName("");
          setAuthRole("");
          setContent("");
          setRating("");
        }
      } catch (error) {
        console.log(error);
      }
    }
    else {
      setNoticeMsg("⚠️ Please fill in all fields before submitting.");
    }
  }

  return (
    <>
      <div className={`border-2 bg-white border-zinc-100 rounded-lg p-4 text-sm lg:text-base font-space ${isActive !== "manual" ? "hidden" : ""}`}>
        <div>
          <input
            type="text"
            placeholder="Author name"
            className="w-full rounded border-2 border-zinc-100 outline-none text-black h-12 my-1  font-semibold p-4" value={authName}
            onChange={(e) => {
              handleAuthName(e);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Author role"
            className="w-full border-2 rounded border-zinc-100 outline-none text-black h-12 my-1  font-semibold p-4" value={authRole}
            onChange={(e) => {
              handleAuthRole(e);
            }}
          />
        </div>
        <div>
          <textarea
            placeholder="Write the testimonial..."
            className="w-full border-2 rounded-t-sm rounded-bl-sm border-zinc-100 outline-none text-black h-24 my-1  font-semibold p-4" value={content}
            onChange={(e) => {
              handleContent(e);
            }}
          ></textarea>
        </div>
        <div>
          <input
            type="number"
            placeholder="Rating (1–5)"
            className="w-full border-2 border-zinc-100 rounded outline-none text-black h-12  font-semibold p-4" value={rating}
            onChange={(e) => {
              handleRating(e);
            }}
          />
        </div>
        <div>
          <button className="bg-black font-space w-full py-2 rounded mt-4" onClick={() => {
            addTestimonial();
          }}>
            Add Testimonial
          </button>
        </div>
      </div>
    </>
  );
};

export default Manual;
