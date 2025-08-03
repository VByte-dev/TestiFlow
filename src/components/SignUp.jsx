import React from "react";
import { SignUp } from "@clerk/clerk-react";

let AuthSignUp = () => {
  return (
    <>
      <div>
        <SignUp
          afterSignUpUrl={"/app"}
          appearance={{
            variables: {
              fontFamily: "Bricolage Grotesque",
              colorShadow: "none",
            },
            elements: {
              card: "border-xl",
            },
            layout: {
              unsafe_disableDevelopmentModeWarnings: true,
            },
          }}
        />
      </div>
    </>
  );
};

export default AuthSignUp;
