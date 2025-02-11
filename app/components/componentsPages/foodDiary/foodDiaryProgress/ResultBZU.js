import styles from '@/app/assets/ProgressLine.module.css';


export default function ResultBZU({mealsZBU}) {
    return (
        <div className={styles.resultBZUWrapper}>
            <div className={styles.resultBZURow}>
                <div className={styles.resultBZUImg}>
                    <img src='/assets/icons/chicken.png'/>
                </div>
                <div className={styles.resultBZUName}>
                    <span>Белки</span>
                </div>
                <div className={styles.resultBZUCount}>
                    <span>{mealsZBU[0].proteins[1] + mealsZBU[1].proteins[1] + mealsZBU[2].proteins[1]}</span>
                </div>

            </div>
            {/* resultBZURow */}

            <div className={styles.resultBZURow}>
                <div className={styles.resultBZUImg}>
                    <img src='/assets/icons/pear.png'/>
                </div>
                <div className={styles.resultBZUName}>
                    <span>Жиры</span>
                </div>
                <div className={styles.resultBZUCount}>
                    <span>{mealsZBU[0].fats[1] + mealsZBU[1].fats[1] + mealsZBU[2].fats[1]}</span>
                </div>

            </div>
            {/* resultBZURow */}

            <div className={styles.resultBZURow}>
                <div className={styles.resultBZUImg}>
                    <img src='/assets/icons/vegetables.png'/>
                </div>
                <div className={styles.resultBZUName}>
                    <span>Углеводы</span>
                </div>
                <div className={styles.resultBZUCount}>
                    <span>{mealsZBU[0].carbohydrates[1] + mealsZBU[1].carbohydrates[1] + mealsZBU[2].carbohydrates[1]}</span>
                </div>

            </div>
            {/* resultBZURow */}
        </div>
    )
}