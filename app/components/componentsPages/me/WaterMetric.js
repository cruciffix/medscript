"use client"
import styles from '@/app/assets/ProgressLine.module.css';
import { useEffect, useRef, useState } from 'react';

export default function WaterMetric() {
    // kidWeight переменная, которая будет подтягиваться из БД (динамическая)
    // Ее сам вводит ребенок, отвечая на то, скок он весит (кг)
    let kidWeight = 40

    // задаем число, которое будет равняться норме
    let normallValue = kidWeight * 0.03;


    let waterValue = 0.1;
    if (waterValue >= 100) waterValue = 100;
    if (waterValue <= 0) waterValue = 0;

    // Число, которе выводится
    const [inputWaterValue, setInputWaterValue] = useState(waterValue)

    // Цепляем ref на div, который будет закрашиваться
    let metricMeWaterBg = useRef(null)
    let normalLineWater = useRef(null)



    useEffect(() => {
        // Ждем загрузки элементов, на которые повешен useRef
        if (metricMeWaterBg && normalLineWater) {
            // Узнаем fullHeight блока обертки, для того, чтобы взять это значение за 100%
            // Исходя из этого мы будем размещать lineNormal в блоке
            let fullHeight = +metricMeWaterBg.current.parentElement.offsetHeight

            // Значение, при пересечение которого будет меняться цвет
            // выше этого (нормы) -- красный
            let normalHeight = +normalLineWater.current.offsetHeight
            
            // Выставляет height у заливки согласно пропорции
            // Это нужно, для того, чтобы высота выставлялась не в виде пикселей
            // а в виде процентов
            let showValue = (inputWaterValue * fullHeight) / normallValue

            metricMeWaterBg.current.style.height = showValue + "px"
            if (showValue > normalHeight) {
                metricMeWaterBg.current.style.backgroundColor = "#F09090"
            }
        }

        
    }, [])

    return (
        <div className={styles.metricsWaterWrapper}>
            <div className={styles.metricsWater}>
                <span className={styles.metricMeValue} >{inputWaterValue} л</span>
            </div>

            

            <div className={styles.metricMeWaterrWrappeBg}>
                <div ref={metricMeWaterBg} className={styles.metricWaterMeBg} ></div>

                <div ref={normalLineWater} className={styles.lineNormalValueWater}></div>
            </div>
        </div>
    )
}