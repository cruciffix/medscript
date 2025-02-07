"use client";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";



export default function RootLayout({ children }) {
    return (
        // <HeaderProvider>
        //     <LayoutContext>{children}</LayoutContext>
        // </HeaderProvider>
        <html lang="en">
            <body>
                {/* {showDefaultHeader && <Header />} */}
                {children}
                <Footer />
            </body>
        </html>
    );
}
