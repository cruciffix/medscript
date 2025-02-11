import styles from '@/app/assets/ProgressLine.module.css';

export default function ProgressHeadline() {
    return (
        <div className={styles.foodDiaryProgressHeadline}>
            <span className={styles.reslutOfDayText}>Результат за день</span>
            <span className={styles.reslutOfDayCount}>6 / 10</span>
        </div>
    )
}