"use client";
import Image from "next/image";
import styles from "@/app/assets/ProgressLine.module.css";
import Runner from "./components/icons/Runner";
import { useEffect, useState, useRef } from "react";
import Cup from "./components/icons/Cup";
import Star from "./components/icons/Star";

export default function Home() {
    const runnerRef = useRef(null);
    const progressLine = useRef(null);

    const [checkMessage, isCheckMessage] = useState(false);

    const messageField = useRef(null);
    const isHaveMessage = useRef(null);
    const isClose = useRef(null);
    const isOpen = useRef(null);

    let arr = [
        {
            title: "Сообщение никите",
            body: "Никитос, проект делается, все на мази вроде как",
        },
        {
            title: "Сообщение никите",
            body: "Никитос, проект делается, все на мази вроде как",
        },
    ];
    useEffect(() => {
        function run(progress) {
            let elem = runnerRef.current;
            let line = progressLine.current;
            if (elem && line) {
                // Вычисляем длину progressLine для того, чтобы взять за 100%
                let widthLine = 300;
                // Вычисляем на основании progress на сколько px нам надо двинуть вперед
                // Это обычная пропорция крест-на-крест для вычисления px по процентам progress
                let offsetPrecent = Math.round((widthLine * progress) / 100);

                // Двигаем бегунок на offsetPrecent пикселей
                elem.style.left = offsetPrecent - elem.offsetWidth / 2 + "px";
                // Увеличиваем длинну progressLine в зависимости от offsetPrecent
                line.style.width = offsetPrecent + "px";
            }
        }

        function haveMessage(arr) {
            if (arr.length > 0) {
                let message = isHaveMessage.current;
                if (message) {
                    message.innerHTML = "Новое сообщение";
                    message.classList.add(styles.isHaveMessageTrue);
                    message.addEventListener("click", () => {
                        // Получаем поле, в котором отображаются сообщения

                        isCheckMessage((prev) => !prev);
                    });
                }
            }
        }

        haveMessage(arr);

        run(50);
    }, []);
    return (
        <>
            <div className={styles.line} ref={progressLine}>
                <div className={styles.unerline}></div>

                <div className={styles.runner} ref={runnerRef}>
                    <Runner />
                    <span className={styles.percent}>23%</span>
                </div>
            </div>

            <div className={styles.ratingAndMessage}>
                <div className={styles.ratingInfoWrapper}>
                    <div
                        className={`${styles.generalStyleRatingMessage} ${styles.newMessageColumn}`}
                    >
                        <img
                            ref={isOpen}
                            src={"/assets/icons/arrowDown.png"}
                            className={`${styles.arrowDown}, ${
                                checkMessage && styles.dNone
                            }`}
                        />
                        <img
                            ref={isClose}
                            src={"/assets/icons/arrowUp.png"}
                            className={`${styles.arrowUp}, ${
                                !checkMessage && styles.dNone
                            }`}
                        />
                        <span
                            className={styles.isHaveMessage}
                            ref={isHaveMessage}
                        >
                            Нет сообщений
                        </span>
                    </div>
                    {/* end newMessageColumn */}

                    <div className={styles.ratingColumn}>
                        <Star></Star>
                        <span>25%</span>
                    </div>
                </div>

                <div
                    className={`${styles.messageField}, ${
                        checkMessage && styles.dNone
                    }`}
                >
                    {arr.map((item, index) => {
                        return (
                            <div
                                className={styles.messageWrapper}
                                key={`${item}_${index}`}
                            >
                                <h4 className={styles.messageTitle}>
                                    Антон, ты большой молодец!
                                </h4>
                                <p className={styles.messageBody}>
                                    Становишься сильнее с каждым тренировочным
                                    днем
                                </p>
                            </div>
                        );
                    })}
                </div>
                {/* end messageField */}
            </div>
            {/* END ratingAndMessage */}

            <div className={styles.avatarAndweightDynamics}>
                <div className={styles.avatarWrapper}>
                    <img className={styles.avatar} src="/assets/avatar.png" />
                </div>

                <div className={styles.weightDynamics}>
                    <h5>Динамика веса</h5>

                    <div className={styles.graphWeight}>
                        <div className={styles.graphRow}>
                            <div className={styles.graphMonthWrapper}>
                                <span className={styles.graphMonth}>
                                    Сентярь
                                </span>
                            </div>

                            <div className={styles.graphLineWrapper}>
                                <div className={styles.graphLine}></div>
                            </div>

                            <div className={styles.graphCountWrapper}>
                                <div className={styles.graphCount}>23</div>
                            </div>
                        </div>
                        {/* graphRow */}

                        <div className={styles.graphRow}>
                            <div className={styles.graphMonthWrapper}>
                                <span className={styles.graphMonth}>
                                    Сентярь
                                </span>
                            </div>

                            <div className={styles.graphLineWrapper}>
                                <div className={styles.graphLine}></div>
                            </div>

                            <div className={styles.graphCountWrapper}>
                                <div className={styles.graphCount}>23</div>
                            </div>
                        </div>
                        {/* graphRow */}

                        <div className={styles.graphRow}>
                            <div className={styles.graphMonthWrapper}>
                                <span className={styles.graphMonth}>
                                    Сентярь
                                </span>
                            </div>

                            <div className={styles.graphLineWrapper}>
                                <div className={styles.graphLine}></div>
                            </div>

                            <div className={styles.graphCountWrapper}>
                                <div className={styles.graphCount}>23</div>
                            </div>
                        </div>
                        {/* graphRow */}
                    </div>
                </div>
                {/* weightDynamics */}
            </div>
            {/* avatarAndweightDynamics */}

            <div className={styles.analytics}>
                <div className={styles.analyticsWrapper}>
                    <div className={styles.analyticsRow}>
                        <div
                            className={`${styles.analyticsMetrica} ${styles.analyticsFieldOk}`}
                        >
                            <span className={styles.analyticsFieldTitle}>
                                Рост
                            </span>
                            <span className={styles.analyticsFieldValue}>
                                120 см
                            </span>
                            <img
                                className={styles.analyticsFieldIcon}
                                src="/assets/icons/ok.png"
                            />
                        </div>

                        <div
                            className={`${styles.analyticsMetrica} ${styles.analyticsFieldOk}`}
                        >
                            <span className={styles.analyticsFieldTitle}>
                                Рост
                            </span>
                            <span className={styles.analyticsFieldValue}>
                                120 см
                            </span>
                            <img
                                className={styles.analyticsFieldIcon}
                                src="/assets/icons/ok.png"
                            />
                        </div>
                    </div>
                    {/* analyticsRow */}

                    <div className={styles.analyticsRow}>
                        <div
                            className={`${styles.analyticsMetrica} ${styles.analyticsFieldAttention}`}
                        >
                            <span className={styles.analyticsFieldTitle}>
                                Рост
                            </span>
                            <span className={styles.analyticsFieldValue}>
                                120 см
                            </span>
                            <img
                                className={styles.analyticsFieldIcon}
                                src="/assets/icons/attention.png"
                            />
                        </div>

                        <div
                            className={`${styles.analyticsMetrica} ${styles.analyticsFieldOk}`}
                        >
                            <span className={styles.analyticsFieldTitle}>
                                Рост
                            </span>
                            <span className={styles.analyticsFieldValue}>
                                120 см
                            </span>
                            <img
                                className={styles.analyticsFieldIcon}
                                src="/assets/icons/ok.png"
                            />
                        </div>
                    </div>
                    {/* analyticsRow */}

                    <div className={styles.analyticsRow}>
                        <div
                            className={`${styles.analyticsMetrica} ${styles.analyticsFieldAttention}`}
                        >
                            <span className={styles.analyticsFieldTitle}>
                                Рост
                            </span>
                            <span className={styles.analyticsFieldValue}>
                                120 см
                            </span>
                            <img
                                className={styles.analyticsFieldIcon}
                                src="/assets/icons/attention.png"
                            />
                        </div>

                        <div
                            className={`${styles.analyticsMetrica} ${styles.analyticsFieldAttention}`}
                        >
                            <span className={styles.analyticsFieldTitle}>
                                Рост
                            </span>
                            <span className={styles.analyticsFieldValue}>
                                120 см
                            </span>
                            <img
                                className={styles.analyticsFieldIcon}
                                src="/assets/icons/attention.png"
                            />
                        </div>
                    </div>
                    {/* analyticsRow */}
                </div>
            </div>
            {/* analytics */}

            <div className={styles.activityChartAndInfo}>
                <div className={styles.activityChartWrapper}>
                    <div className={styles.activityChart}>
                        <div className={styles.activityChartBg}></div>

                        <div className={styles.activityChartTitleCount}>
                            <span className={styles.activityChartTitle}>
                                Активность
                            </span>
                            <span className={styles.activityChartCount}>
                                81%
                            </span>
                        </div>
                    </div>
                    {/* activityChart */}
                </div>

                <div className={styles.infoActivityWrapper}>
                    <div className={styles.infoActivityRow}>
                        <div className={styles.infoActivityIconAndtitle}>
                            <img
                                className={styles.infoActivityIcon}
                                src="/assets/icons/go.png"
                            />
                            <span className={styles.infoActivityTitle}>
                                Ходьба
                            </span>
                        </div>

                        <div className={styles.infoActivityValueWrapper}>
                            <span className={styles.infoActivityValue}>
                                10 мин
                            </span>
                        </div>
                    </div>
                    {/* infoActivityRow */}

                    <div className={styles.infoActivityRow}>
                        <div className={styles.infoActivityIconAndtitle}>
                            <img
                                className={styles.infoActivityIcon}
                                src="/assets/icons/go.png"
                            />
                            <span className={styles.infoActivityTitle}>
                                Ходьба
                            </span>
                        </div>

                        <div className={styles.infoActivityValueWrapper}>
                            <span className={styles.infoActivityValue}>
                                10 мин
                            </span>
                        </div>
                    </div>
                    {/* infoActivityRow */}

                    <div className={styles.infoActivityRow}>
                        <div className={styles.infoActivityIconAndtitle}>
                            <img
                                className={styles.infoActivityIcon}
                                src="/assets/icons/go.png"
                            />
                            <span className={styles.infoActivityTitle}>
                                Ходьба
                            </span>
                        </div>

                        <div className={styles.infoActivityValueWrapper}>
                            <span className={styles.infoActivityValue}>
                                10 мин
                            </span>
                        </div>
                    </div>
                    {/* infoActivityRow */}
                </div>
            </div>
            {/* activityChartAndInfo */}
        </>
    );
}
