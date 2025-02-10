import styles from "@/app/assets/ProgressLine.module.css";

export default function ActivityChartTitleCount() {
    return (
        <div className={styles.activityChartTitleCount}>
            <span className={styles.activityChartTitle}>
                Активность
            </span>
            <span className={styles.activityChartCount}>
                81%
            </span>
        </div>
    )
}