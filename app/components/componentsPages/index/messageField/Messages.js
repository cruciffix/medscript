import styles from "@/app/assets/ProgressLine.module.css";

export default function MessagesComponent({arr}) {
    return (
        <>
            {arr.map((item, index) => {
                return (
                    <div
                        className={styles.messageWrapper}
                        key={`${item}_${index}`}
                    >
                        <h4 className={styles.messageTitle}>
                            Антон, ты большой молодец!
                        </h4>
                        <p className={styles.messageBody}>
                            Становишься сильнее с каждым тренировочным
                            днем
                        </p>
                    </div>
                );
            })}
        </>
    )
}