import styles from "@/app/assets/ProgressLine.module.css";
import FieldDropDown from "./FieldDropDown";
import { useContext, useRef, useState } from "react";
import { DataContext } from "@/app/helloPage/questionnaire/page";

export default function InputDropDown({title, goalItems, name}) {
    const {data, setData} = useContext(DataContext)
    const fieldDropDown = useRef();
    const [showDropDown, setShowDropDown] = useState(true);
    function selectItemDrop() {
        setShowDropDown(prev => !prev)
    }
    return (
        <div className={styles.inputDropDownWrapper}>
            <div onClick={selectItemDrop} className={styles.paramDropDown}>
                <span 
                    style={{color: data[name] ? "#3BBC2D" : ""}}
                    className={styles.placeholderDropDown}>
                    {data[name] ? data[name] : title}
                </span>
            </div>

            <FieldDropDown
                showDropDown={showDropDown}
                setShowDropDown={setShowDropDown}
                ref={fieldDropDown}
                goalItems={goalItems}
                name={name}
            />

        </div>


    )
}