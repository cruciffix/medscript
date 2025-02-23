import styles from '@/app/assets/ProgressLine.module.css';
import TopThree from './components/TopThree';
import AboutMyProgress from './components/AboutMyProgress';

export default function Top() {
    return (
        <div className={styles.top}>
            <div className={styles.topWrapper}>
                <div className={styles.headlineTopWrapper}>
                    <h3 className={styles.headlineTop}>Топ 3</h3>
                </div>

                <TopThree />

                <div className={styles.dividingLine}></div>

                <AboutMyProgress />
            </div>
            {/* topWrapper */}
        </div>
    )
}