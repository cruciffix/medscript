import styles from "@/app/assets/ProgressLine.module.css";
import InfoActivityIconAndtitle from "./InfoActivityIconAndtitle";


export default function InfoActivityRowComponent () {
    return (
        <div className={styles.infoActivityRow}>
            <InfoActivityIconAndtitle />

            <div className={styles.infoActivityValueWrapper}>
                <span className={styles.infoActivityValue}>
                    10 мин
                </span>
            </div>
        </div>
    )
}