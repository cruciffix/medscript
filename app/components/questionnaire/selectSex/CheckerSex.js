"use client"
import styles from "@/app/assets/ProgressLine.module.css";
import { DataContext } from "@/app/questionnaire/page";
import Image from "next/image";
import { useContext } from "react";

export default function CheckerSex({title, imgSrc, valueSex}) {
    const {data, setData} = useContext(DataContext); 
    function isCheck(event, value) {
        setData(prev => {
            return {
                ...prev,
                sex: value
            }
        })
    }
    return (
        <div className={styles.sex}>
                <Image className={styles.imgSex} src={imgSrc} alt="imgsex" />
                <span className={styles.nameSex}>{title}</span>
                
                <div
                    onClick={(event) => {isCheck(event, valueSex)}}
                    className={styles.bgSelectingSexWrapper}
                >
                    <div  className={data.sex == valueSex ? styles.bgSelectingSex : styles.dNone}></div>
                </div>
                
                
            </div>
    )
}