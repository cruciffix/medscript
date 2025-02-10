"use client";

import { useEffect, useRef } from "react";
import Runner from "../../../icons/RunnerIcon";
import styles from "@/app/assets/ProgressLine.module.css";


export default function ProgressLine () {
    const runnerRef = useRef(null);
    const progressLine = useRef(null);
    

    useEffect(()=> {
        function run(progress) {
            let elem = runnerRef.current;
            let line = progressLine.current;
            if (elem && line) {
                // Вычисляем длину progressLine для того, чтобы взять за 100%
                let widthLine = 300;
                // Вычисляем на основании progress на сколько px нам надо двинуть вперед
                // Это обычная пропорция крест-на-крест для вычисления px по процентам progress
                let offsetPrecent = Math.round((widthLine * progress) / 100);

                // Двигаем бегунок на offsetPrecent пикселей
                elem.style.left = offsetPrecent - elem.offsetWidth / 2 + "px";
                // Увеличиваем длинну progressLine в зависимости от offsetPrecent
                line.style.width = offsetPrecent + "px";
            }
        }

        run(56)
    }, [])
    return (
        <div className={`${styles.line}`} ref={progressLine}>
                <div className={styles.unerline}></div>

                <div className={styles.runner} ref={runnerRef}>
                    <Runner />
                    <span className={styles.percent}>23%</span>
                </div>
        </div>
    )
}