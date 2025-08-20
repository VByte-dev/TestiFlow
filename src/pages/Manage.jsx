import React, { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

// Components
import TestiCard from "../components/manage/TestiCard";
import ProjectName from "../components/ProjectName";
import Notice from "../components/Notice";

let Manage = (props) => {
  // Destructuring props
  let { projectName, user } = props;
  // Destructuring user
  let id = user?.id || null;

  useEffect(() => {
    id = user?.id || null;
  }, [props, user, projectName]);


  // Fetching data from supabase
  let [testimonials, setTestimonials] = useState([]);
  let fetchData = async () => {
    try {
      let { data, error } = await supabase
        .from('testiflow')
        .select('*')
        .eq("project_name", projectName)
        .eq("user_id", id);

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
    id = user?.id || null;
    fetchData();
  }, [projectName, user])

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
  }, [projectName, user, testimonials]);

  // Deleting testimonial
  let navigateTo = useNavigate();

  let deleteTestimonial = async (created_at) => {
    try {
      let { error } = await supabase
        .from('testiflow')
        .delete() // Work on it
        .eq('user_id', user.id)
        .eq('created_at', created_at)
        .eq("project_name", projectName);

      if (error) {
        console.log(error.message);
      } else {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="">
        {/* Project Name */}
        <section className="my-10 mx-8 md:my-10 md:mx-10 flex justify-end">
          <ProjectName projectName={projectName} />
        </section>

        {/* Notice message */}
        <section className="mx-8 lg:mx-80 mt-16">
          <Notice message={noticeMsg} />
        </section>

        {/* Data */}
        <div className=" rounded p-3 my-10 mx-2 lg:mx-80 mt-16">
          {testimonials.map((v, i, a) => (
            <TestiCard key={i} data={v} deleteTestimonial={deleteTestimonial} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Manage;
