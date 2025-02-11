import styles from '@/app/assets/ProgressLine.module.css';
import CrossIcon from '@/app/components/icons/CrossIcon';

export default function ListProductWrapper({meals, crossSelectProduct, 
    indexMeal, selectPoductBreakfast, selectProductDinner, selectProductLunch, setSelectPoductBreakfast,
     setSelectProductLunch,
     setSelectProductDinner, 
     selectProducts,
    mealsZBU, setMealsZBU  }) {
    function selectingProduct(event, index, indexMeal) {
        // Тут мы делаем проверку для того, чтобы дважды нельзя выбрать один и тот же продукт
        // Если элемент event.targetinnerHTML (пр. oatmealPorridge345) уже есть 
        // в selectPoductBreakfast то запрещаем кликать
        if (!selectProducts[indexMeal].includes(event.target.innerHTML.trim())) {
            // Меняем цвета выбраного продукта
            event.target.classList.remove(styles.notSelectItemProductText);
            event.target.classList.add(styles.selectItemProductText);

            // Подтягиваем каллораж вместе с блюдами
            // Берем названия продукта
            let productName = event.target.innerHTML.trim();

            // Выбираем завтрак / обед / ужин и подставляем название продукта productName
            // Получаем БЖУ выбранного продукта
            let productZBU = meals[index][productName];
            // Суммируем значение в zbu
            let sumP = Number(mealsZBU[index]['proteins'][1]) + Number(productZBU['protein']);
            let sumF = Number(mealsZBU[index]['fats'][1]) + Number(productZBU['fats']);
            let sumC =
                Number(mealsZBU[index]['carbohydrates'][1]) + Number(productZBU['carbohydrates']);
            // Вносим sumP, sumF, sumC в mealsZBU, заставляя его менять
            setMealsZBU((prev) => {
                // let copyPrev = [...prev];
                // copyPrev[index] ={
                //     proteins: [...copyPrev[index]["proteins"], copyPrev[index]["proteins"][1] = sumP],
                //     fats: [...copyPrev[index]["fats"], copyPrev[index]["fats"][1] = sumF],
                //     carbohydrates: [...copyPrev[index]["carbohydrates"], copyPrev[index]["carbohydrates"][1] = sumC]
                // }
                
                
                // return copyPrev
                return prev.map((meal, i) => {
                    // meal -- это объект

                    if (i === index) {
                        return {
                            proteins: [meal.proteins[0], sumP],
                            fats: [meal.fats[0], sumF],
                            carbohydrates: [meal.carbohydrates[0], sumC]
                        }
                    } else {
                        return meal
                    }
                })
            });

            
            // Добавляем в массивы выбранных продуктов по логике:
            if (index == 0) {
                setSelectPoductBreakfast((prev) => {
                    // Добавляем в массив выбранных продуктов
                    return [...prev, event.target.innerHTML.trim()];
                });
            } else if (index === 1) {
                setSelectProductLunch((prev) => {
                    // Добавляем в массив выбранных продуктов
                    return [...prev, event.target.innerHTML.trim()];
                });
                
            } else if (index === 2) {
                setSelectProductDinner((prev) => {
                    // Добавляем в массив выбранных продуктов
                    return [...prev, event.target.innerHTML.trim()];
                });
            }

        }
    }

    return (
        <div className={ styles.listProductWrapper} >
            {/* Здесь мы проходим по ключам объекта meals, в которых */}
            {/* Записаны название продуктов доступных для определенного приема пищи, */}
            <CrossIcon width={16} height={16}
            className={styles.closeListProductWrapper}
            ref={(el) =>{crossSelectProduct.current[indexMeal] = el}}/>

            {meals.map((item, index) => {
                // item -- завтрак / обед / ожин
                // Тут мы делаем проверку: если текущий индекс indexMeal кликнутого поля совпадает с
                // индекс index (завтрак-0/обед-1/ужин-2) перебираемого объекта meals
                // то отображать только его
                // простыми словами в поле завтрак мы отображаем проудкты завтрака и тп
                    if (index === indexMeal) {
                        return Object.keys(meals[indexMeal]).map((i, idx) => {
                            return (
                                <div>
                                    <span
                                        key={`${i}_${indexMeal}_${idx}`}
                                        // ${index}_mealsFlag -- ялвяется флагом для обозначения еды
                                        className={`${styles.itemProductName} ${styles.notSelectItemProductText} ${index}_mealsFlag`}
                                        onClick={(event) => { selectingProduct(event, index, indexMeal)}}
                                        id={i}
                                    >
                                        {i}
                                    </span>
                                </div>
                            );
                        });
                    }
            })}
        
        </div>
    )
}