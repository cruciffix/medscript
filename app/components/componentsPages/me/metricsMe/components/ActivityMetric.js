"use client"

import styles from '@/app/assets/ProgressLine.module.css';
import { useEffect, useRef, useState } from 'react';

export default function ActivityMetric() {
    let activityCurrnet = 30;

    if (activityCurrnet >= 100) activityCurrnet = 100;
    if (activityCurrnet <= 0) activityCurrnet = 0
    const [inputActivityValues, setInputActivityValues] = useState(activityCurrnet)

    const activityBgWrapper = useRef(null)

    useEffect(() => {
        if (activityBgWrapper) {
            activityBgWrapper.current.style.height = inputActivityValues + "px"
        }
    }, [])
    return (
        <div className={styles.progessActivityWrapper}>
            <div className={styles.metricsKcals}>
                <span className={styles.metricMeValue}>{inputActivityValues} %</span>
            </div>

            <div className={styles.activityBgWrapper}>
                <div ref={activityBgWrapper} className={styles.activityBg}></div>
            </div>
        </div>
    )
}