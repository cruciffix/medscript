"use client";
import { useEffect } from "react";
import Header from "../components/anotherHeaderAndFooter/Header";
import Footer from "../components/Footer";
import { useHeaderContext } from "../components/HeaderContext";

export default function FoodDiaryLayout({ children }) {
    const { setShowDefaultHeader } = useHeaderContext();
    useEffect(() => {
        // Отключаем родительский header;
        setShowDefaultHeader(false);
        return () => {
            setShowDefaultHeader(true);
        };
    }, []);

    return (
        <>
            <Header /> {/* Отображаем свой Header */}
            <div className="">{children}</div>
        </>
    );
}
