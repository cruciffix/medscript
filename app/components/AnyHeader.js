import styles from '@/app/assets/Header.module.css';

export default function AnyHeader({h1}) {
    return (
        <header className={styles.headerAny}>
			<h1 className={styles.headerHeadline}>{h1}</h1>
		</header>
    )

}