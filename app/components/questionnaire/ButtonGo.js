import styles from "@/app/assets/ProgressLine.module.css";
import { DataContext } from "@/app/helloPage/questionnaire/page";
import { useContext, useState } from "react";

export default function ButtonGo({bgScroll}) {
    const [buttonSend, setButtonSend] = useState(false)
    function nextGo() {
        let offset = parseFloat(bgScroll.current.style.marginLeft) - 100
        if (offset <= -200) {
            offset = -200;
            setButtonSend(prev => !prev)
        }
        if (offset >= 0) offset = 0 
        bgScroll.current.style.marginLeft = offset + "vw"
    }
    return (
        <>
            {buttonSend ? (
                <div className={styles.buttonGoWrapper}>
                    <button onClick={nextGo} className={styles.buttonGo}>Далее</button>
                </div>
            ) : (
                <div className={styles.buttonGoWrapper}>
                    <button onClick={nextGo} className={styles.buttonGo}>Продолжить</button>
                </div>
            )}
        </>
        
    )
}