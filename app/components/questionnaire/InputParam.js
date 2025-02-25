import styles from "@/app/assets/ProgressLine.module.css";
import { DataContext } from "@/app/questionnaire/page";
import { useContext } from "react";

export default function InputParam ({placeholder, name}) {
    const {data, setData} = useContext(DataContext);

    function sendData(event) {
        setData(prev => {
            return {
                ...prev,
                [name]: event.target.value
            }
        })
    }
    return (
        <div className={styles.param}>
            <input onBlur={sendData} type={name !== "name" ? "number" : "text"} className={styles.inputParam} placeholder={placeholder}/>
        </div>
    )
}