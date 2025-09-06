import React from "react";
import { SignIn } from "@clerk/clerk-react";

let AuthSignIn = () => {
  return (
    <>
      <div>
        <SignIn
          afterSignInUrl={'/app'}
          signUpUrl={"/auth/signup"}
          appearance={{
            variables: {
              colorShadow: "none",
            },
            elements: {
              card: "border-xl",
            },
          }}
        />
      </div>
    </>
  );
};

export default AuthSignIn;
