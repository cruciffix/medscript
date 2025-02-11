import styles from '@/app/assets/ProgressLine.module.css';


export default function NutrientMetric({indexMeal, mealsZBU}) {
    return (
        <div className={styles.nutrientsWrapper}> 
            {mealsZBU.map((item, index) => {

                if (indexMeal === index) {
                    return (
                        <div key={index}>
                            {Object.keys(item).map((key) => (
                                    <div
                                        className={styles.nutrients}
                                        key={key}
                                        >
                                        <span className={styles.nutrientName}>
                                            {item[key][0]}{' '}(г)
                                        </span>
                                        <span className={styles.nutrientWeight}>
                                            {item[key][1]}
                                        </span>
                                    </div>
                                ),
                            )}
                        </div>
                    );
                }
                
            })}
        </div>
    )
}