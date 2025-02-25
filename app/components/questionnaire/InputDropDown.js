import styles from "@/app/assets/ProgressLine.module.css";
import FieldDropDown from "./FieldDropDown";

export default function InputDropDown() {
    return (
        <>
            <div className={styles.paramDropDown}>
                <span className={styles.placeholderDropDown}>Ты занимаешься спортом?</span>
            </div>

            <FieldDropDown />

        </>


    )
}