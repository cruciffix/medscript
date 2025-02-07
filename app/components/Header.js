import Link from 'next/link';
import styles from '@/app/assets/Header.module.css';
const Header = () => {
	return (
		<header className={styles.mainHeader}>
			<span className={styles.data}>Суббота, 23 ноября</span>
			<h1 className={styles.helloName}>Привет, Антон</h1>
		</header>
	);
};

export default Header;
