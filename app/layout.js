"use client";
import "./globals.css";
import Footer from "./components/Footer";
import favicon from "@/public/favicon.png"
import { useEffect } from "react";



export default function RootLayout({ children }) {

    return (

        <html lang="en">
            <head>
                <link rel="icon" href={favicon.src} />
                <link rel="icon" type="image/png" href={favicon.src} />
            </head>
            <body>

                {children}

            </body>
        </html>
    );
}


// import styles from "@/app/assets/ProgressLine.module.css";
// import Image from "next/image";
// import logo from "@/public/logo.png"

// export default function HelloPage() {
//     return (
//         <div className={styles.helloPage}>

//             <div className={styles.helloPageWrapper}>
//                 <div className={styles.helloPageLogoWrapper}>
//                     <Image 
//                         alt="logo"
//                         src={logo}
//                         className={styles.logoHelloPage}
//                     />
//                 </div>
//                 <h1 className={styles.nameApp}>MED<span>SCRIPT</span></h1>
//             </div>
            
//         </div>
//     )
// }