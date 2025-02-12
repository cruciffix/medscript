
"use client"
import styles from '@/app/assets/ProgressLine.module.css';
import { useEffect, useRef, useState } from 'react';
import WaterMetric from '../components/componentsPages/me/WaterMetric';
import KcalsMetric from '../components/componentsPages/me/KcalMetric';

export default function Me() {
    

    return (
        <div className='marginHorizontal'>
            <div className={styles.avatarAndMyNameMe}>
                <div className={styles.avatarMeWrapper}>
                    <div className={styles.avatarMe}>
                        <img className={styles.avatarMeImg} src="/assets/avatar.png"/>
                    </div>
                </div>

                <div className={styles.myNameWrapper}>
                    <h1 className={styles.myNameValue}>Антон</h1>
                </div>
            </div>


            <div className={styles.meticsAndPresentMe}>
                <div className={styles.meticsAndPresentMeWrapper}>
                    <WaterMetric />
                    <KcalsMetric />
                </div>
            </div>
        </div>
    )
}