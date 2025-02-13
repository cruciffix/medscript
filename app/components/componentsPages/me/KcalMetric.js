"use client"

import styles from '@/app/assets/ProgressLine.module.css';
import { useEffect, useRef, useState } from 'react';

export default function KcalsMetric() {
    // kidWeight переменная, которая будет подтягиваться из БД (динамическая)
    // Ее сам вводит ребенок, отвечая на то, скок он весит (кг)
    let kidGrowth = 150
    let kidWeight = 51.3
    let kidOld = 20;
    // Это фактические Ккал
    let kcalsValue = 150;

    // Здесь мы делаем так, чтобы число kcalsValue не входило за рамки 0 и 100
    if (kcalsValue >= 100) kcalsValue = 100
    if (kcalsValue <= 0) kcalsValue = 0; 
    
    let [inputKcalsValues, setInputKcalsValues] = useState(kcalsValue)
    // Цепляем ref на div и на normalLine, который будет закрашиваться
    let metricKcalsBg = useRef(null);
    let normalLineKcal = useRef(null)

    useEffect(() => {
        // Формула для расчета ккал по формула Харриса — Бенедикта:
        // Для мужчин формула выглядит так: BMR = 66,47 + (13,75 × вес в кг)
        // + (5,003 × рост в см) − (6,755 × возраст в годах)
        // Для женщин — BMR = 655,1 + (9,563 × вес в кг) + 
        // (1,85 × рост в см) − (4,676 × возраст в годах)

        // Ждем загрузки элементов, на которые повешен useRef
        if (metricKcalsBg && normalLineKcal) {
            // Узнаем fullWidth блока обертки, для того, чтобы взять это значение за 100%
            // Исходя из этого мы будем размещать lineNormal в блоке
            let fullWidth = +metricKcalsBg.current.parentElement.offsetWidth;
            
            // Расчитываем норму по формуле Харисона Бенедикта
            let formulaHarrisonBenetikt = 66.47  + (13.75 * kidWeight) + (5.003 * kidGrowth) - (6.855 * kidOld);


            // Отображаем 
            // metricKcalsBg.current.style.width = inputKcalsValues + "px"
        }
    }, [])

    return (
        <div className={styles.metricsKcalsWrapper}>
            <div className={styles.metricsKcals}>
                <span className={styles.metricMeValue} >{inputKcalsValues} Ккал</span>
            </div>

            <div className={styles.metricMeKcalsWrappeBg}>
                <div ref={metricKcalsBg} className={styles.metricKcalsMeBg}></div>

                <div ref={normalLineKcal} className={styles.normalLineAndValueWrapper}>
                    <div className={styles.normalLineKcals}></div>
                    <div className={styles.normalLineKcals}>244</div>
                </div>
            </div>
        </div>
    )
}