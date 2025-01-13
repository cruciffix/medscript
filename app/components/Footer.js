import Link from "next/link";
import styles from "@/app/assets/Footer.module.css";
const Footer = () => {
    return (
        <footer>
            <div className={styles.footerWrapper}>
                <img
                    src="/assets/icons/home.png"
                    className={styles.footerIcon}
                />

                <img
                    src="/assets/icons/spoonAndFork.png"
                    className={styles.footerIcon}
                />

                <img
                    src="/assets/icons/shop.png"
                    className={styles.footerIcon}
                />

                <img
                    src="/assets/icons/customer.png"
                    className={styles.footerIcon}
                />
            </div>
        </footer>
    );
};

export default Footer;
