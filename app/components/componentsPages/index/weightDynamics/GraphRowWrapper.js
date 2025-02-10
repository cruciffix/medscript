import styles from "@/app/assets/ProgressLine.module.css";
import React, { useState } from "react";
import GraphRowComponent from "./GraphRow";

export default function GraphRowWrapperComponent({children}) {
        // "Сентябрь", "Август", "Июль", "Июнь", "Май", "Апрель", "Март", "Февраль", "Январь"
        const [namesMonthsReverse, setNamesMonthsReverse] = useState(["Декабрь", "Ноябрь", "Октябрь"])
    return (
        
        <div className={styles.graphWeight}>
            {namesMonthsReverse.map((item, index) => {
                return <GraphRowComponent monthName={item} key={`${item}_${index}`}/>
            })}
        </div>
    )
}