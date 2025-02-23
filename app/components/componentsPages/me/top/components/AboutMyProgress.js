import styles from '@/app/assets/ProgressLine.module.css';
import Header from './Header';
import Body from './Body';

export default function AboutMyProgress() {
    return (
        <div className={styles.infoAboutMyProgress}>
            <Header />

            <Body />
        </div>
    )
}