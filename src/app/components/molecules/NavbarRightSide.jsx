// 'use client'
import React, { useContext, useState } from "react";
import Image from "next/image";
import HeaderIcon from "../atoms/HeaderIcon";
import refreshIcon from "../atoms/img/refreshIcon.svg";
import viewlistIcon from "../atoms/img/viewlistIcon.svg";
import settingsIcon from "../atoms/img/settingsIcon.svg";
import appsIcon from "../atoms/img/appsIcon.svg";
import useraccountIcon from "../atoms/img/useraccountIcon.svg";
import { useEffect } from "react";
import { Router, useRouter } from "next/navigation";
import { auth, firestore } from "../../Firebase";
import styles from "./NavbarRightSide.css";
import { doc, getDoc } from "firebase/firestore";
import firebase from "firebase/app"
// import { MyContext } from "@/UserContext";
import {useUser} from "../Context/ContextProvider";


const NavbarRightSide = () => {
  //calling contextapi

  // const userDisplayName =  useContext(ContextProvider);
  const router = useRouter();
    
  const user = useUser();

  const display = user.name;
  // const Role = user.role;
  // const userEmail = user.email;
  console.log(display);


  // console.log(userDisplayName)
  
    function signout () {
      auth.signOut().then(()=> {
        router.push("/");
        console.log("user logged out Successfully")

      }).catch((error)=> {

        console.log(error);
      })
    }
    // console.log(userDisplayName);
    
  return (
    <>
      <div className="navbar-right-side">
        <p>
          Welcome: <span>{display}</span>
        </p>
        <HeaderIcon icon={refreshIcon} title="Refresh" alt="refresh-icon-svg" />
        <HeaderIcon icon={viewlistIcon} title="List view" alt="view-icon-svg" />
        <HeaderIcon
          icon={settingsIcon}
          title="Settings"
          alt="settings-icon-svg"
        />
        <HeaderIcon icon={appsIcon} title="apps" alt="apps-icon-svg" />
        <HeaderIcon
          icon={useraccountIcon}
          title="user Account"
          alt="user-account-icon-svg"
        />
        <button className="btn btn-logout" onClick={signout}>Logout</button>
      </div>
    </>
  );
};

export default NavbarRightSide;
