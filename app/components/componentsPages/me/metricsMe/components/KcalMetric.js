"use client"

import styles from '@/app/assets/ProgressLine.module.css';
import { useEffect, useRef, useState } from 'react';

export default function KcalsMetric() {
    // kidWeight переменная, которая будет подтягиваться из БД (динамическая)
    // Ее сам вводит ребенок, отвечая на то, скок он весит (кг)
    let kidGrowth = 150
    let kidWeight = 70
    let kidOld = 15;
    



    // Теоритические возможное колиество Ккал
    const maxKcal = 3000;

    // Базовая формула Миффлина-Сан Жеора для детей
    // Мальчики: BMR = (10 × вес в кг) + (6,25 × рост в см) - (5 × возраст в годах) + 5
    // Девочки: BMR = (10 × вес в кг) + (6,25 × рост в см) - (5 × возраст в годах) - 161
    const normal = (10 * kidWeight) + (6.25 * kidGrowth) - (5 * kidOld); 

    // Это фактические Ккал
    let kcalsValue = 3000;
    // Здесь мы делаем так, чтобы число kcalsValue не входило за рамки 0 и 100
    if (kcalsValue <= 0) kcalsValue = 0; 
    if (kcalsValue >= 4000) kcalsValue = 3000; 
    let [inputKcalsValues, setInputKcalsValues] = useState(kcalsValue)
    // Цепляем ref на div и на normalLine, который будет закрашиваться

    // Получаем bgWaterKcals чтобы растягивать его
    const bgWaterKcals = useRef(null)
    useEffect(() => {
        if (bgWaterKcals) {
            // Сделали заливку
            const currentResultPx = (kcalsValue * 100) / maxKcal;
            bgWaterKcals.current.style.width = currentResultPx + "px"
        }
    }, [])

    // Получаем normalLineWrapper чтобы изменять положение в зависимоти от нормы
    const normalLineWrapper = useRef(null)
    useEffect(() => {
        if (normalLineWrapper) {
            

            
            // 4000 - 100
            // 1400 - x
            const result = (normal * 100) / maxKcal
            normalLineWrapper.current.style.left = result + "px"
        }
    }, [])

    return (
        <div className={styles.metricsKcalsWrapper}>
            <div className={styles.metricsKcals}>
                {/* <span className={styles.metricMeValue} >{inputKcalsValues} Ккал</span> */}
                <span className={styles.metricMeValue} >{maxKcal} Ккал</span>
            </div>

            <div className={styles.bgAndNormalLineWrapper}>
                <div className={styles.bgWaterKcals} ref={bgWaterKcals}>
                </div>

                <div className={styles.currentKcalWrapper}>
                    <span className={styles.currentKcal}>{inputKcalsValues}</span>
                </div>

                <div className={styles.normalLineWrapper} ref={normalLineWrapper}>
                    <span className={styles.valueKcal}>{normal}</span>
                </div>

                {/* <div className={styles.normalLineAndKcalWrapper}>
                    
                </div> */}
            </div>
        </div>
    )
}