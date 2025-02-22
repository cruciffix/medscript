

"use client"
import styles from '@/app/assets/ProgressLine.module.css';
import { useEffect, useRef, useState } from 'react';

export default function WaterMetric() {

    let currentValue = 1.5;
    if (currentValue >= 3) currentValue = 3;
    if (currentValue <= 0) currentValue = 0;

    // waterMetricValue -- это ток, сколько ребенок выпил
    const [waterMetricValue, setWaterMetricValue] = useState(currentValue);

    // Получаем поле bgWater, которое будет менять свойство height 
    // в зависимоти от того сколько ребенок выпил жидкости
    let bg = useRef(null);

    // Получаем поле bgWater, которое будет менять свойство top
    // для того, чтобы установить норму
    let normalLine = useRef(null)
    let waterWrapper = useRef(null)

    // теоретически максимальный объем воды, который может выпить ребенок 
    let maxValueWater = 3

    // Высчитываем норму воду изходя из формулы: вес (weightKid) * 0.03;
    let weightKid = 50;
    let normalWaterValue = weightKid * 0.03; // 1.5

    useEffect(() => {
        // в блоке if соверашем проверку:
        // если прогрузилось, то выполнить блок кода
        if (bg && normalLine) {
            
            let fullSize = bg.current.parentElement.offsetHeight
            // showResult -- значения, уже переведенные в проценты для нормального
            // заполнения секции

            // Спозициционируем normalLine относительно составленной пропорции
            // Мы это делаем т.к. норма будет динамической (зависит от веса)
            // maxValueWater (3 л) = fullSize (100px)
            // normalWaterValue (1.5 л) = x
            let normalLineResult = (normalWaterValue * fullSize) / maxValueWater;
            let offsetHieghtWaterWrapper = waterWrapper.current.offsetHeight
            normalLine.current.style.top =offsetHieghtWaterWrapper - normalLineResult + 20 + "px";

            // Увеличиваем свойство height (заливка);
            // Мы это делаем т.к. объем выпитый воды будет изменяться в течение дня;
            // Вначале соотнесем выпитый объем, к максимальному (получим процент)
            // Потом умножим это все на fullSize
            let showBgResult = (waterMetricValue / maxValueWater) * fullSize;
            bg.current.style.height = showBgResult + "px";
        }
    }, [])

    return (
        <div  className={styles.waterMetricWrapper}>
            <div className={styles.waterMetricHeadlineWrapper}>
                <span className={styles.waterMetricHeadline}>{maxValueWater} л</span>
            </div>

            

            <div ref={waterWrapper} className={styles.bgAndNormalLineWaterWrapper}>
                <div ref={bg} className={styles.bgWater}></div>

                <div className={styles.currentWaterMetricWrapper}>
                    <span className={styles.currentMetric}>{waterMetricValue}</span>
                </div>

                <div ref={normalLine} className={styles.normalLineAndValueWaterWrapper}>
                    
                    <div className={styles.normalLineWater}></div>
                    <span className={styles.valueWater}>{normalWaterValue}</span>
                </div>
            </div>
        </div>
    )
}