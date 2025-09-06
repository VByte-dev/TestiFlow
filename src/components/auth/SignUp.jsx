import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let AuthSignUp = () => {
  let navigateTo = useNavigate();
  let { isLoaded, isSignedIn, user } = useUser();
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigateTo('/auth/signup');
    } else if (isSignedIn) {
      navigateTo('/app/project');
    }
  }, [isLoaded])

  return (
    <>
      <div>
        <SignUp
          afterSignUpUrl={"/app"}
          signInUrl={"/auth/signin"}
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

export default AuthSignUp;
