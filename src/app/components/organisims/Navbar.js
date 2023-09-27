import React from "react";
import styles from "./Navbar.css";
import NavbarRightSide from "../molecules/NavbarRightSide";
import SearchInput from "../atoms/SearchInput";
import LeftSideBar from "../molecules/LeftSIdeBar";


const Navbar = () => {
  const test = ()=>{
    alert()
  }
  return (
    <>
      <nav className="navbar">
        <LeftSideBar />
        <SearchInput />
        <NavbarRightSide />
      </nav>
    </>
  );
};

export default Navbar;
