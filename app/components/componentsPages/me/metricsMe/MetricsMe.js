"use client"

import styles from '@/app/assets/ProgressLine.module.css';
import WaterMetric from './components/WaterMetric';
import KcalsMetric from './components/KcalMetric';
import ActivityMetric from './components/ActivityMetric';


export default function MetricsMe() {
    return (
        <div className={styles.meticsMe}>
            <div className={styles.meticsMeWrapper}>
                <WaterMetric />
                <KcalsMetric />
                <ActivityMetric />
            </div>
        </div>
    )
}