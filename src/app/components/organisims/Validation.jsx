"use client";
import React, { useState } from "react";
import WelcomeMessage from "../molecules/WelcomeMessage";
import ValidationForm from "../molecules/ValidationForm";
import { auth } from "../../Firebase";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

function Validation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/Start");
    } catch (error) {
      // Handle errors
      console.error("Error signing up:", error);
    }
  };

const  routeToSignup = ()=> {
    router.push("/");
  }
  return (
    <div className="Login-container">
      <WelcomeMessage />
      <ValidationForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmit={handleSignup}
        route={routeToSignup}
      />
    </div>
  );
}

export default Validation;
