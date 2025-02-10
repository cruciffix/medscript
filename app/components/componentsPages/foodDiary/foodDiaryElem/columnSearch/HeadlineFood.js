import styles from '@/app/assets/ProgressLine.module.css';

export default function HeadlineFood({indexMeal}) {
    return (
        <div className={styles.foodDiaryHeaderWrapper }>
            <h2 className={styles.foodDiaryHeader}>
                {indexMeal === 0
                    ? 'Завтрак'
                    : indexMeal === 1
                    ? 'Обед'
                    : 'Ужин'}
            </h2>
            <img
                className={styles.foodDiaryWhat}
                src='/assets/icons/what.png'
            />
        </div>
    )
}