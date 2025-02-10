import styles from "@/app/assets/ProgressLine.module.css";


export default function GraphRowComponent({monthName}) {
    return (
        <div className={styles.graphRow} >
            <div className={styles.graphMonthWrapper}>
                <span className={styles.graphMonth}>
                    {monthName}
                </span>
            </div>

            <div className={styles.graphLineWrapper}>
                <div className={styles.graphLine}></div>
            </div>

            <div className={styles.graphCountWrapper}>
                <div className={styles.graphCount}>23</div>
            </div>
        </div>
    )
}