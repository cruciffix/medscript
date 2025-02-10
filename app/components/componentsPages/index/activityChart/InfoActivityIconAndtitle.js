import styles from "@/app/assets/ProgressLine.module.css";

export default function InfoActivityIconAndtitle() {
    return (
        <div className={styles.infoActivityIconAndtitle}>
            <img
                className={styles.infoActivityIcon}
                src="/assets/icons/go.png"
            />
            <span className={styles.infoActivityTitle}>
                Ходьба
            </span>
        </div>
    )
}