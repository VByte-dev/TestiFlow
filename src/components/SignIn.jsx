import React from "react";
import { SignIn } from "@clerk/clerk-react";

let AuthSignIn = () => {
  return (
    <>
      <div>
        <SignIn
        afterSignInUrl={'/app'}
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

export default AuthSignIn;
