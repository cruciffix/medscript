import styles from "@/app/assets/ProgressLine.module.css";
import InputParam from "../InputParam";
import InputDropDown from "../InputDropDown";

export default function SelectGoals () {

    const goalItems = {
        doSport: [
            "Почти никогда",
            "1–2 раза в неделю",
            "3–5 раз в неделю",
            "Каждый день"
        ],

        eatFastfood: [
            "Каждый день",
            "Несколько раз в неделю",
            "1-2 раза в месяц",
            "Менее 1 раза в месяц"
        ],

        goal: [
            "Похудеть",
            "Стать сильнее",
            "Научиться правильно питаться",
            "Улучшить здоровье",
        ],

        eatingHabits: [
            "Каждый день",
            "Несколько раз в неделю",
            "1-2 раза в месяц",
            "Менее 1 раза в месяц"
        ]
    }
    return (
        <div className={styles.carouselQuestionWapper}>
            <div className={styles.titleQuestionnaireWrapper}>
                <h1 className={styles.titleQuestionnaire}>Напишите ваши цели</h1>
            </div>

            <div className={styles.selectGoalsWrapper}>
                <InputDropDown title={"Ты занимаешься спортом?"} goalItems={goalItems} name="doSport"/>
                <InputDropDown title={"Часто ли ты ешь фастфуд?"} goalItems={goalItems} name="eatFastfood"/>
                <InputDropDown title={"Какая твоя цель?"} goalItems={goalItems} name="goal"/>
                <InputDropDown title={"Часто ли ты ешь фрукты и овощи?"} goalItems={goalItems} name="eatingHabits"/>
            </div>
        </div>
    )
}