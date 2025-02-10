"use client";
import styles from "@/app/assets/ProgressLine.module.css";
import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import ProgressLineComponent from "./components/componentsPages/index/progressLine/ProgressLine";
import CheckMessageComponent from "./components/componentsPages/index/ratingInfoWrapper/CheckMessageComponent";
import RatingComponent from "./components/componentsPages/index/ratingInfoWrapper/Rating";
import MessagesComponent from "./components/componentsPages/index/messageField/Messages";
import AvatarComponent from "./components/componentsPages/index/Avatar/AvatarComponent";
import GraphRowWrapperComponent from "./components/componentsPages/index/weightDynamics/GraphRowWrapper";
import AnalyticsMetricaComponent from "./components/componentsPages/index/analitics/AnalyticsMetrica";
import ActivityChartComponent from "./components/componentsPages/index/activityChart/ActivityChart";
import InfoActivityRowComponent from "./components/componentsPages/index/activityChart/InfoActivityRow";

export default function Home() {
    

    const [checkMessage, isCheckMessage] = useState(true);



    const arr = [
        {
            title: "Сообщение никите",
            body: "Никитос, проект делается, все на мази вроде как",
        },
        {
            title: "Сообщение никите",
            body: "Никитос, проект делается, все на мази вроде как",
        },
        {
            title: "ДАВАНИКА ПРИВЕТ",
            body: "Никитос, проект делается, все на мази вроде как",
        },
    ];


    


    return (
        <div className="marginHorizontal">
            <Header />

            <ProgressLineComponent />


            <div className={`marginVertivalBetweenSections paddingInnerBlock ${styles.ratingAndMessage}`}>
                <div className={styles.ratingInfoWrapper}>
                    <CheckMessageComponent 
                        arr={arr}/>

                    <RatingComponent />
                </div>

                <div
                    className={`${styles.messageField} ${checkMessage && styles.dNone}`}
                >
                    <MessagesComponent arr={arr} />
                    
                </div>
            </div>

            <div className={`marginVertivalBetweenSections  ${styles.avatarAndweightDynamics}`}>
                <AvatarComponent />

                <div className={styles.weightDynamics}>
                    <h5>Динамика веса</h5>

                    <GraphRowWrapperComponent />

                </div>
            </div>

            <div className={`${styles.analytics}`}>
                <div className={styles.analyticsWrapper}>
                    <div className={styles.analyticsRow}>
                        <AnalyticsMetricaComponent />
                        <AnalyticsMetricaComponent />
                    </div>

                    <div className={styles.analyticsRow}>
                        <AnalyticsMetricaComponent />
                        <AnalyticsMetricaComponent />
                    </div>

                    <div className={styles.analyticsRow}>
                        <AnalyticsMetricaComponent />
                        <AnalyticsMetricaComponent />
                    </div>
                </div>
            </div>

            <div className={`marginVertivalBetweenSections ${styles.activityChartAndInfo}`}>
                <div className={styles.activityChartWrapper}>
                    <ActivityChartComponent />
                </div>

                <div className={styles.infoActivityWrapper}>
                    <InfoActivityRowComponent />
                    <InfoActivityRowComponent />
                    <InfoActivityRowComponent />
                </div>
            </div>
            {/* activityChartAndInfo */}
        </div>
    );
}
