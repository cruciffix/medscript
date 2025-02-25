import styles from "@/app/assets/ProgressLine.module.css";
import { DataContext } from "@/app/helloPage/questionnaire/page";
import { useContext, useState } from "react";

export default function FieldDropDown({ref, showDropDown, goalItems, name,}) {
    const {data, setData} = useContext(DataContext);

    function handleClick(item) {
        setData(prev => {
            return {
                ...prev,
                [name]: item
            }
        })
    }
    return (
        <div ref={ref} className={`${styles.fieldDropDown} ${showDropDown ? styles.dNone : ""}`}>
            {
                goalItems[name].map((item, index) => {
                    return (
                        <div
                            key={`${item}_${index}`}
                            onClick={() => handleClick(item)}
                            className={styles.elemDropDownWrapper}
                        >
                            <span 
                                style={{
                                    backgroundColor: `${data[name] == item ? "#3BBC2D" : ""}`,
                                    color: `${data[name] == item ? "#fff" : ""}`
                                }}
                                className={styles.elemDropDown}>{item}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}