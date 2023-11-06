// import Image from 'next/image'
// import styles from './page.module.css'
// import Navbar from '../src/app/components/organisims/Navbar'
// import Sidenav from '../src/app/components/organisims/Sidenav'
// import MainSection from '../src/app/components/organisims/MainSection'


// export default function Home() {
//     return (
//         <main>
//             <Navbar />
//             <Sidenav />
//             <MainSection />
//         </main>
//     )   
// }





import Image from "next/image";
import styles from './pages.css'
import Login from "@/app/components/organisims/Login";



function index () {
    return ( 
        <main>
            <Login/>
        </main>
    )
}

export default index ;