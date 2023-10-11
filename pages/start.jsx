import Image from "next/image";
import Styles from './pages.css'
import Navbar from "@/app/components/organisims/Navbar";
import Sidenav from "@/app/components/organisims/Sidenav";
import MainSection from "@/app/components/organisims/MainSection";

function start() {
  return (
    <main>
      <Navbar />
      <Sidenav />
      <MainSection />
    </main>
  );
}

export default start;
