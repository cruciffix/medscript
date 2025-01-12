"use client";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HeaderProvider, useHeaderContext } from "./components/HeaderContext";

function LayoutContext({ children }) {
    // Здесь лежит вот это:
    // value={{ showDefaultHeader, setShowDefaultHeader }}
    const { showDefaultHeader } = useHeaderContext();

    return (
        <html lang="en">
            <body className="margin">
                {showDefaultHeader && <Header />}
                {children}
                <Footer />
            </body>
        </html>
    );
}

export default function RootLayout({ children }) {
    return (
        <HeaderProvider>
            <LayoutContext>{children}</LayoutContext>
        </HeaderProvider>
    );
}
