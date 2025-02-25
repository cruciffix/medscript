"use client";
import styles from "@/app/assets/ProgressLine.module.css";
import { useState } from "react";
import Header from "../components/Header";
import ProgressLine from "../components/componentsPages/index/progressLine/ProgressLine";
import CheckMessageComponent from "../components/componentsPages/index/ratingInfoWrapper/CheckMessageComponent";
import RatingComponent from "../components/componentsPages/index/ratingInfoWrapper/Rating";
import MessagesComponent from "../components/componentsPages/index/messageField/Messages";
import AvatarComponent from "../components/componentsPages/index/Avatar/AvatarComponent";
import GraphRowWrapperComponent from "../components/componentsPages/index/weightDynamics/GraphRowWrapper";
import InfoActivityRowComponent from "../components/componentsPages/index/activityChart/InfoActivityRow";
import AnalyticsMetrica from "../components/componentsPages/index/analitics/AnalyticsMetrica";
import ActivityChart from "../components/componentsPages/index/activityChart/ActivityChart";
import Footer from "../components/Footer";

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
        <>
            <div className="marginHorizontal">
                <Header />

                <ProgressLine />

                <div className={`marginVertivalBetweenSections paddingInnerBlock ${styles.ratingAndMessage}`}>
                    <div className={styles.ratingInfoWrapper}>
                        <CheckMessageComponent
                            checkMessage={checkMessage}
                            isCheckMessage={isCheckMessage}
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
                            <AnalyticsMetrica />
                            <AnalyticsMetrica />
                        </div>

                        <div className={styles.analyticsRow}>
                            <AnalyticsMetrica />
                            <AnalyticsMetrica />
                        </div>

                        <div className={styles.analyticsRow}>
                            <AnalyticsMetrica />
                            <AnalyticsMetrica />
                        </div>
                    </div>
                </div>

                <div className={`marginVertivalBetweenSections ${styles.activityChartAndInfo}`}>
                    <div className={styles.activityChartWrapper}>
                        <ActivityChart />
                    </div>

                    <div className={styles.infoActivityWrapper}>
                        <InfoActivityRowComponent />
                        <InfoActivityRowComponent />
                        <InfoActivityRowComponent />
                    </div>
                </div>
                {/* activityChartAndInfo */}

            </div>
            <Footer />
        </>
    );
}