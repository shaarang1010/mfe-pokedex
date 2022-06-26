import React, { useState, useContext, useEffect } from "react";
import { Hero } from "mfe-ui-components";
import { SignUpForm } from "../../components/forms/signup/Signup";
import { LoginForm } from "../../components/forms/login/Login";

export const SignUpPage = () => {
  const [isSignUp, setSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [characterName, setCharacterName] = useState("Ash Ketchum");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    switch (type) {
      case "CHARACTER":
        setCharacterName(e.target.value);
        break;
      case "EMAIL":
        setEmail(e.target.value);
        break;
      case "PASSWORD":
        setPassword(e.target.value);
        break;
      case "RETYPE-PASSWORD":
        setRetypePassword(e.target.value);
        break;
    }
  };

  return (
    <Hero
      heading={isSignUp ? "SignUp here" : "Login"}
      info={isSignUp ? "Choose an avatar and get started" : "Log back in"}
    >
      {isSignUp && (
        <SignUpForm
          characterName={characterName}
          updateCharacterName={(e) => onChangeHandler(e, "CHARACTER")}
          password={password}
          updatePassword={(e) => onChangeHandler(e, "CHARACTER")}
          email={email}
          updateEmail={(e) => onChangeHandler(e, "CHARACTER")}
          avatar={avatar}
          updateAvatar={(e) => console.log("avatar")}
          reEnterPassword={retypePassword}
          reTypedPassword={(e) => onChangeHandler(e, "RETYPE-PASSWORD")}
          onFormActionHandler={() => {}}
        />
      )}
      {!isSignUp && (
        <LoginForm
          email={email}
          setEmail={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          password={password}
          setPassword={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          onLoginHandler={() => console.log("login")}
        />
      )}
      <div className="flex justify-center">Login instead</div>
    </Hero>
  );
};
