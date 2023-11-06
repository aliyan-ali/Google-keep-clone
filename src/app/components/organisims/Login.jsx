"use client"
import React, { useState } from "react";
import WelcomeMessage from "../molecules/WelcomeMessage";
import SigninForm from "../molecules/SigninForm";
import { auth } from "../../Firebase";
import { useRouter } from "next/navigation"; // Correct import
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../Firebase";

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
      const user = userCredential.user;
      // User signed up successfully


      // //create a user doc in firestore
        const userDocRef = doc(firestore, "users",user.uid); 

        // define a user data to store in firebase store
        const userData = {
          name,
          email,  
          role:'user'
        };

        await setDoc(userDocRef, userData);//creates user document
        console.log(userDocRef);
        console.log("user document created in firestore");
        
        console.log(name, email);




      console.log("User signed up:", user);

      router.push("/Start");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  const routeToLogin = ()=> {

      router.push("/Signin");
  }


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
        router={routeToLogin}
      />
    </div>
  );
}

export default Login;
