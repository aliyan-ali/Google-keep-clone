import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/organisims/Navbar'
import Sidenav from './components/organisims/Sidenav'
import MainSection from './components/organisims/MainSection'


export default function Home() {
  return (
    <main>
      <Navbar />
        <Sidenav />
      <MainSection />
    </main>
  )
}
