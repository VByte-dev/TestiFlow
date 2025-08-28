import React, { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

// Components
import TestiCard from "../components/manage/ManageCard";
import ProjectName from "../components/ProjectName";
import Notice from "../components/Notice";
import Loader from "../components/Loader";

let Manage = (props) => {
  // Destructuring props
  let { projectName, user } = props;
  // Destructuring user
  let id = user?.id || null;

  useEffect(() => {
    id = user?.id || null;
  }, [props, user, projectName]);

  // Loader state
  let [isLoading, setIsLoading] = useState(false);

  // Fetching data from supabase
  let [testimonials, setTestimonials] = useState([]);
  let fetchData = async () => {

    setIsLoading(true);
    const start = Date.now();

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
    } finally {
      const elapsed = Date.now() - start;
      const delay = Math.max(0, 1000 - elapsed);
      setTimeout(() => setIsLoading(false), delay);
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
    setIsLoading(true);
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

        {isLoading ? <>
          <div className=" mx-2 lg:mx-80"><Loader /></div></> : <>
          {/* Notice message */}

          <section className="mx-8 lg:mx-80 mt-16">
            <h1 className="font-bricolage text-zinc-600 text-md md:text-lg mb-8">All your testimonials, neatly managed in one place.</h1>
            <Notice message={noticeMsg} />
          </section>

          {/* Data */}
          <div className=" rounded p-3 my-10 mx-2 lg:mx-80 mt-4">
            {testimonials.map((v, i, a) => (
              <TestiCard key={i} data={v} deleteTestimonial={deleteTestimonial} />
            ))}
          </div></>}
      </div>
    </>
  );
};

export default Manage;
