import styles from "@/app/assets/ProgressLine.module.css";
import InputParam from "../InputParam";
import InputDropDown from "../InputDropDown";

export default function SelectGoals () {
    return (
        <div className={styles.carouselQuestionWapper}>
            <div className={styles.titleQuestionnaireWrapper}>
                <h1 className={styles.titleQuestionnaire}>Напишите ваши цели</h1>
            </div>

            <div className={styles.selectGoalsWrapper}>
                <InputDropDown />
            </div>
        </div>
    )
}