import styles from "@/app/assets/ProgressLine.module.css";
import { DataContext } from "@/app/helloPage/questionnaire/page";
import { useContext } from "react";

export default function ButtonGo({bgScroll}) {
    const {data, setData} = useContext(DataContext)

    function sendData() {
        let offset = parseFloat(bgScroll.current.style.marginLeft) - 100
        if (offset <= -200) offset = -200;
        if (offset >= 0) offset = 0 
        bgScroll.current.style.marginLeft = offset + "vw"
    }
    return (
        <div className={styles.buttonGoWrapper}>
            <button onClick={sendData} className={styles.buttonGo}>Продолжить</button>
        </div>
    )
}