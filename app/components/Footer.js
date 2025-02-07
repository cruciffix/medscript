import Link from "next/link";
import styles from "@/app/assets/Footer.module.css";
const Footer = () => {
    return (
        <footer>
            <div className={styles.footerWrapper}>
                <Link href="/">
                    <img
                        src="/assets/icons/home.png"
                        className={styles.footerIcon}
                    />
                </Link>

                <Link href="/foodDiary">
                    <img
                        src="/assets/icons/spoonAndFork.png"
                        className={styles.footerIcon}
                    />
                </Link>

                <Link href="/shop">
                    <img
                        src="/assets/icons/shop.png"
                        className={styles.footerIcon}
                    />
                </Link>
                <Link href="/shop">
                    <img
                        src="/assets/icons/customer.png"
                        className={styles.footerIcon}
                    />
                </Link>

            </div>
        </footer>
    );
};

export default Footer;
