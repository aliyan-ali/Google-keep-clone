"use client"
import React, { useState } from "react";
import WelcomeMessage from "../molecules/WelcomeMessage";
import SigninForm from "../molecules/SigninForm";
import { auth } from "../../Firebase";
import { useRouter } from "next/navigation"; // Correct import
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User signed up successfully
      const user = userCredential.user;
      updateProfile(user,{
        displayName:`${name}`,//remove  if error
      })
      console.log("User signed up:", user);

      router.push("/start");
    } catch (error) {
      // Handle errors
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="Login-container">
      <WelcomeMessage />
      <SigninForm
        name={name}
        email={email}
        password={password}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmit={handleSignup}
      />
    </div>
  );
}

export default Login;
