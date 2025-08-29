import React, { useEffect, useState } from 'react';
import supabase from '../../lib/supabaseClient';
// Components
import TestiCard from './TestiCard';

let TestiWall = (props) => {
  // Destructuring props
  let { projectName, user, theme } = props;

  // Destructuring user
  let id = user?.id || null;
  useEffect(() => {
    id = user?.id || null;
    // console.log(projectName, user);
  }, [props, user]);

  // Fetch Testimonials
  let [testimonials, setTestimonials] = useState([]);
  let fetchData = async () => {
    try {
      let { data, error } = await supabase
        .from("testiflow")
        .select("*")
        .eq("user_id", id)
        .eq("project_name", projectName);

      if (!error) {
        setTestimonials(data);
      } else {
        console.log(error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [projectName]);

  return (
    <>
      <div
        className="flex justify-center p-4 rounded-lg transition-colors duration-500 bg-[#EADDFF]"
        style={{ backgroundColor: theme?.bg || "#f3e8ff" }}
      >
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 w-full"
          id="testimonials"
        >
          {testimonials.map((v, i) => (
            <div key={i} className="mb-4 break-inside-avoid">
              <TestiCard data={v} theme={theme} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestiWall;
