import styles from '@/app/assets/ProgressLine.module.css';

export default function Body() {
    return (
        <div className={styles.motivationWrapper}>
            <h5 className={styles.motivationHeadline}>Каждое усилие – это шаг к успеху!</h5>
            <p className={styles.motivationText}>Сегодня ты на седьмом месте, а завтра можешь оказаться первыми! </p>
        </div>
    )
}