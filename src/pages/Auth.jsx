import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthSignIn from "../components/auth/SignIn";
import AuthSignUp from "../components/auth/SignUp";

let Auth = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-[#D8C6FF] h-screen">
        <Routes>
          <Route path="/signup" element={<AuthSignUp />} />
          <Route path="/signin" element={<AuthSignIn />} />
        </Routes>
      </div>
    </>
  );
};

export default Auth;
