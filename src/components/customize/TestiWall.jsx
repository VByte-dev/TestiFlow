import React, { useEffect, useState } from "react";
import supabase from "../../lib/supabaseClient";
import TestiCard from "./TestiCard";

let TestiWall = ({ projectName, user, theme, columns = 3 }) => {
  let id = user?.id || null;

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
    <div
      className="p-4 rounded-lg"
      style={{ backgroundColor: theme?.bg || "#f3e8ff" }}
    >
      <div
        id="testimonials"
        style={{
          columnCount: columns,  // 👈 dynamic based on user input
          columnGap: "1rem",
        }}
      >
        {testimonials.map((v, i) => (
          <TestiCard key={i} data={v} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default TestiWall;
