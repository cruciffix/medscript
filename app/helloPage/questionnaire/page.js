"use client"
import styles from "@/app/assets/ProgressLine.module.css";
import ButtonGo from "@/app/components/questionnaire/ButtonGo";
import SelectGoals from "@/app/components/questionnaire/selectGoals/SelectGoals";
import SelectSex from "@/app/components/questionnaire/selectSex/SelectSex";
import UserParams from "@/app/components/questionnaire/userParams/UserParams";
import { createContext, useRef, useState } from "react";

export const DataContext = createContext();

export default function Questionnaire() {
    const [data, setData] = useState({
        sex: null,
        name: null,
        age: null,
        weight: null,
        height: null,
        doSport: null,
        eatFastfood: null,
        goal: null,
        motivation: null,
    })

    const bgScroll = useRef(null)
    return (
        <DataContext.Provider value={{data, setData}}>
            <div className={styles.questionnaire}>
                <div ref={bgScroll} className={styles.questionnaireWrapper} style={{marginLeft: 0}}>

                        {/* <SelectSex /> */}

                        {/* <UserParams /> */}

                        <SelectGoals />
                        

                </div>

                <ButtonGo bgScroll={bgScroll}/>

               
            </div>
        </DataContext.Provider>
    )
}
