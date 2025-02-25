
"use client"
import styles from "@/app/assets/ProgressLine.module.css";
import Image from "next/image";
import logo from "@/public/logo.png"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HelloPage() {
    const router = useRouter(); // Получаем объект router

    // Используем useEffect для редиректа через 2 секунды
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/questionnaire"); // Укажите путь, на который нужно перенаправить
        }, 2000); // 2000 мс = 2 секунды

        // Очищаем таймер при размонтировании компонента
        return () => clearTimeout(timer);
    }, [router]); // Зависимость от router


    return (
        <div className={styles.helloPage}>

            <div className={styles.helloPageWrapper}>
                <div className={styles.helloPageLogoWrapper}>
                    <Image 
                        alt="logo"
                        src={logo}
                        className={styles.logoHelloPage}
                    />
                </div>
                <h1 className={styles.nameApp}>MED<span>SCRIPT</span></h1>
            </div>
            
        </div>
    )
}