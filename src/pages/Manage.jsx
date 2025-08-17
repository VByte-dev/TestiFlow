import React, { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";

let Manage = (props) => {
  // Destructuring props
  let { projectName, user } = props;

  // Fetching data from supabase
  let [testimonials, setTestimonials] = useState([]);
  let fetchData = async () => {
    try {
      let { data, error } = await supabase
        .from('testiflow')
        .select('*')
        .eq("project_name", projectName)
        .eq("user_id", user.id);

      if (error) {
        console.log(error.message);
      } else {
        setTestimonials(data);
        console.log("Testimonials:", testimonials);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className="my-10 mx-8 lg:mx-80 mt-16">
        {/* Data */}
        <div className=" rounded p-3">
          {testimonials.map((v, i, a) => (
            <section className="my-2 truncate font-space text-black" key={i}>{JSON.stringify(v)}</section>
          ))}
        </div>
      </div>
    </>
  );
};

export default Manage;
