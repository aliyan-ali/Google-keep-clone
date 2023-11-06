import Navbar from "@/app/components/organisims/Navbar";
import Sidenav from "@/app/components/organisims/Sidenav";
import MainSection from "@/app/components/organisims/MainSection";
// import { useEffect, useState } from "react";
import Styles from './pages.css'
// import { auth } from "@/app/Firebase";
import {UserProvider} from "@/app/components/Context/ContextProvider";


function Start() {






  return (
    <UserProvider>
      <main>
        <Navbar />
        <Sidenav />
        <MainSection />
      </main>
    </UserProvider>
  );
}

export default Start;
