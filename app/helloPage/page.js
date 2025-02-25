import styles from "@/app/assets/ProgressLine.module.css";
import Image from "next/image";
import logo from "@/public/logo.png"

export default function HelloPage() {
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