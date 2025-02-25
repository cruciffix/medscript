import styles from "@/app/assets/ProgressLine.module.css";
import man from "@/app/assets/medscript/another/icon_png/man.png"
import girl from "@/app/assets/medscript/another/icon_png/girl.png"
import CheckerSex from "./CheckerSex";

export default function SelectSex() {
    return (
        <div className={styles.carouselQuestionWapper} >
            <div className={styles.titleQuestionnaireWrapper}>
                <h1 className={styles.titleQuestionnaire}>Выбери пол</h1>
            </div>

            <div className={styles.selectSex}>
                <div className={styles.selectSexWrapper}>
                    <CheckerSex title="Мужской" imgSrc={man} valueSex="man"/>
                    <CheckerSex title="Женский" imgSrc={girl} valueSex="girl"/>
                </div>

            </div>

            
        </div>
    )
}