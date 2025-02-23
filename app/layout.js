"use client";
import "./globals.css";
import Footer from "./components/Footer";
import favicon from "@/public/favicon.png"
import { useEffect } from "react";



export default function RootLayout({ children }) {

    return (
        // <HeaderProvider>
        //     <LayoutContext>{children}</LayoutContext>
        // </HeaderProvider>
        <html lang="en">
            <head>
                <link rel="icon" href={favicon.src} />
                <link rel="icon" type="image/png" href={favicon.src} />
            </head>
            <body>
                {/* {showDefaultHeader && <Header />} */}
                {children}
                <Footer />
            </body>
        </html>
    );
}
