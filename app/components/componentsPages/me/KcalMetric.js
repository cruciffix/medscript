"use client"

import styles from '@/app/assets/ProgressLine.module.css';
import { useEffect, useRef, useState } from 'react';

export default function KcalsMetric() {
    let kcalsValue = 150;
    if (kcalsValue >= 100) kcalsValue = 100
    if (kcalsValue <= 0) kcalsValue = 0; 
    let [inputKcalsValues, setInputKcalsValues] = useState(kcalsValue)
    let metricKcalsBg = useRef(null)

    useEffect(() => {
        // Ждем загрузки элементов, на которые повешен useRef
        if (metricKcalsBg) {
            // Отображаем 
            metricKcalsBg.current.style.width = inputKcalsValues + "px"
        }
    }, [])

    return (
        <div className={styles.metricsKcalsWrapper}>
            <div className={styles.metricsKcals}>
                <span className={styles.metricMeValue} >{inputKcalsValues} Ккал</span>
            </div>

            <div className={styles.metricMeKcalsWrappeBg}>
                <div ref={metricKcalsBg} className={styles.metricKcalsMeBg} ></div>
            </div>
        </div>
    )
}