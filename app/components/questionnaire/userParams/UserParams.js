import styles from "@/app/assets/ProgressLine.module.css";
import InputParam from "../InputParam";

export default function UserParams() {
    return (
        <div className={styles.carouselQuestionWapper} >
            <div className={styles.titleQuestionnaireWrapper}>
                <h1 className={styles.titleQuestionnaire}>Заполните параметры</h1>
            </div>

            <div className={styles.paramsWrapper}>
                <InputParam placeholder="Имя" name="name"/>
                <InputParam placeholder="Возраст" name="age"/>
                <InputParam placeholder="Рост (см)" name="height"/>
                <InputParam placeholder="Вес (кг)" name="weight"/>
            </div>
        </div>
    )
}