import styles from "@/app/assets/ProgressLine.module.css";

export default function AnalyticsMetrica() {
    return (
        <div
            className={`${styles.analyticsMetrica} ${styles.analyticsFieldOk}`}
        >
            <span className={styles.analyticsFieldTitle}>
                Рост
            </span>
            <span className={styles.analyticsFieldValue}>
                120 см
            </span>
            <img
                className={styles.analyticsFieldIcon}
                src="/assets/icons/ok.png"
            />
        </div>
    )
}