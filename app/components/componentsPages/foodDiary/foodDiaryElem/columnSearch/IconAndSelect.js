import styles from '@/app/assets/ProgressLine.module.css';


export default function IconAndSelect ({inputSelectProduct, indexMeal}) {
    return (
        <>
            <img src='/assets/icons/search.png' />

            <div
                className={`${styles.inputSearch} ${indexMeal}_mealsFlag`}
                ref={(el) =>{inputSelectProduct.current[indexMeal] = el}} 
            >
                <span>Выбирите продукт</span>
            </div>
        </>
    )
}