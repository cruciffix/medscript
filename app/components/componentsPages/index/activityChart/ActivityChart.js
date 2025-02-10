import styles from "@/app/assets/ProgressLine.module.css";
import ActivityChartTitleCount from "./ActivityChartTitleCount";

export default function ActivityChart() {
    return (
        <div className={styles.activityChart}>
            <div className={styles.activityChartBg}></div>

            <ActivityChartTitleCount />
        </div>
    )
}