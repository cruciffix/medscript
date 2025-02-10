import styles from "@/app/assets/ProgressLine.module.css";
import StarIcon from "@/app/components/icons/StarIcon"

export default function RatingComponent() {
    return (
        <div className={styles.ratingColumn}>
            <StarIcon />
            <span>25%</span>
        </div>
    )
}