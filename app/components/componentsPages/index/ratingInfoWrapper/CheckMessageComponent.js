"use client";

import styles from "@/app/assets/ProgressLine.module.css";

import { useEffect, useRef } from "react";

export default function CheckMessageComponent({arr, checkMessage, isCheckMessage}) {

    const isHaveMessage = useRef(null);
    const isClose = useRef(null);
    const isOpen = useRef(null);


    useEffect(() => {
        function haveMessage(arr) {
            if (arr.length > 0) {
                let message = isHaveMessage.current;
                if (message) {
                    message.innerHTML = "Новое сообщение";
                    message.classList.add(styles.isHaveMessageTrue);
                    message.addEventListener("click", () => {
                        // Получаем поле, в котором отображаются сообщения
                        isCheckMessage((prev) => !prev);
                    });
                }
            }
        }

        haveMessage(arr);
    }, [])

    return (
        <div
            className={`${styles.generalStyleRatingMessage} ${styles.newMessageColumn}`}
        >
            <img
                ref={isOpen}
                src={"/assets/icons/arrowDown.png"}
                className={`${styles.arrowDown}, ${
                    checkMessage && styles.dNone
                }`}
            />
            <img
                ref={isClose}
                src={"/assets/icons/arrowUp.png"}
                className={`${styles.arrowUp}, ${
                    !checkMessage && styles.dNone
                }`}
            />
            <span
                className={styles.isHaveMessage}
                ref={isHaveMessage}
            >
                Нет сообщений
            </span>
        </div>
            
    )
}