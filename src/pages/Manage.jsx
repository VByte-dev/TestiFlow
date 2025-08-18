import React, { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

// Components
import TestiCard from "../components/manage/testiCard";
import ProjectName from "../components/ProjectName";
import Notice from "../components/Notice";

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

  // Notice message
  let [noticeMsg, setNoticeMsg] = useState("");

  // Handle idle project
  let handleIdle = () => {
    setNoticeMsg("⚠️ Select a project before managing testimonials");
  }

  // Handle empty testimonial
  let handleEmpty = () => {
    setNoticeMsg("⚠️ No testimonials yet. Collect feedback to start managing here.")
  }
  useEffect(() => {
    if (projectName === "Idle" || projectName === "") {
      handleIdle();
    }
    else if (testimonials.length === 0) {
      handleEmpty();
    }
    else {
      setNoticeMsg("");
    }
  }, [projectName, testimonials]);

  // Deleting testimonial
  let navigateTo = useNavigate();

  let deleteTestimonial = async (v) => {
    let { error } = await supabase
      .from('testiflow')
      .delete() // Delete only the necessary data - fetch the proper card detail from the TestiCard
      .eq('user_id', user.id);
    if (error) {
      console.log(error.message);
    } else {
      navigateTo("/app/manage");
    }
  }

  return (
    <>
      <div className="">
        {/* Project Name */}
        <section className="my-8 mx-8 md:my-10 md:mx-10 flex justify-end">
          <ProjectName projectName={projectName} />
        </section>

        {/* Notice message */}
        <section className="mx-8 lg:mx-80 mt-16">
          <Notice message={noticeMsg} />
        </section>

        {/* Data */}
        <div className=" rounded p-3 my-10 mx-8 lg:mx-80 mt-16">
          {testimonials.map((v, i, a) => (
            <TestiCard key={i} data={v} deleteTestimonial={deleteTestimonial} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Manage;
