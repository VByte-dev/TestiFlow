import React, { useEffect, useState } from 'react';
import supabase from '../../lib/supabaseClient';
import { data, useLocation } from 'react-router-dom';

// Components
import TestiCard from './TestiCard';

let TestiWall = (props) => {
  // Destructuring props
  let { user } = props;

  // Fetching Projectname
  let [projectName, setProjectName] = useState("");

  let location = useLocation();
  useEffect(() => {
    let query = new URLSearchParams(location.search);
    setProjectName(query.get("projectName"));
  }, []);

  // Destructuring user
  let id = user?.id || null;
  useEffect(() => {
    id = user?.id || null;
  }, [props, user]);

  // Fetch Testimonials
  let [testimonials, setTestimonials] = useState([]);
  let fetchData = async () => {
    console.log("TestiWall");
    try {
      let { data, error } = await supabase
        .from("testiflow")
        .select("*")
        .eq("user_id", id)
        .eq("project_name", projectName);

      if (!error) {
        console.log("Data", data);
        setTestimonials(data);
      } else {
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, [props]);

  return (
    <>
      <div className='flex flex-wrap w-screen bg-indigo-100 rounded-lg justify-center'>
        {testimonials.map((v, i, a) => <TestiCard data={v} key={i} />)}
      </div>
    </>
  )
}

export default TestiWall;