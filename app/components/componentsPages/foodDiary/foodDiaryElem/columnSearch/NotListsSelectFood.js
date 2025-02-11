import styles from '@/app/assets/ProgressLine.module.css';

export default function ListsSelectFoodComponent ({ selectProducts, indexMeal, meals, mealsZBU, setMealsZBU,
    setSelectPoductBreakfast, setSelectProductLunch , setSelectProductDinner ,
 }) {
    // Удаление выбранного продукта
    function deleteSelectProduct(item, idx, event) {

        // Отменяем цвета выбранного продкута, возвращая дефлотные
        // Выборку elemNotSelect искать в ,fieldSelectProduct 

        if(typeof window !== undefined) {
            let elemNotSelect = document.querySelector(`#${item}`);
            if (elemNotSelect) {
                elemNotSelect.classList.remove(styles.selectItemProductText);
                elemNotSelect.classList.add(styles.notSelectItemProductText);
            }
        }
        

        // Подтягиваем каллораж вместе с блюдами
        // Берем названия кликнутого продукта
        let productName = item;
        // Выбираем завтрак / обед / ужин и подставляем название продукта productName
        // Получаем БЖУ
        // productZBU -- еда с колоражем из общего массива meals
        let productZBU = meals[idx][productName];
        // currntNutricies-- текущие нутриэлементы
        let currntNutricies = mealsZBU[idx];
        let minusP = currntNutricies['proteins'][1] - productZBU['protein'];
        let minusF = currntNutricies['fats'][1]- productZBU['fats'];
        let minusC = currntNutricies['carbohydrates'][1] - productZBU['carbohydrates'];
        setMealsZBU((prev) => {
            // const copyPrev = [...prev];
            // copyPrev[idx] ={
            //     proteins: [...copyPrev[idx]["proteins"], copyPrev[idx]["proteins"][1] = minusP],
            //     fats: [...copyPrev[idx]["fats"], copyPrev[idx]["fats"][1] = minusF],
            //     carbohydrates: [...copyPrev[idx]["carbohydrates"], copyPrev[idx]["carbohydrates"][1] = minusC]
            // }
            // return copyPrev

            return prev.map((meal, i) => {
                // meal -- это объект

                if (i === idx) {
                    return {
                        proteins: [meal.proteins[0], minusP],
                        fats: [meal.fats[0], minusF],
                        carbohydrates: [meal.carbohydrates[0], minusC]
                    }
                } else {
                    return meal
                }
            })
        });
        

        // Используем хук юзстейст
        if (idx === 0) {
            setSelectPoductBreakfast((prev) => {
                // Проходимся по массива selectProduct, который 
                // содержит в себе выбранные продукты
                // Если текущий prev элемент из массива selectProduct совпадает
                // с item кликнутым элементов, то мы удаляем item из selectProduct

                return prev.filter(elem=> elem !== item)
  
            });  
        } else if (idx === 1) {
            setSelectProductLunch((prev) => {
                // Проходимся по массива selectProduct, который 
                // содержит в себе выбранные продукты
                // Если текущий prev элемент из массива selectProduct совпадает
                // с item кликнутым элементов, то мы удаляем item из selectProduct

                return prev.filter(elem=> elem !== item)
            });  
        } else if (idx === 2) {
            setSelectProductDinner((prev) => {
                // Проходимся по массива selectProduct, который 
                // содержит в себе выбранные продукты
                // Если текущий prev элемент из массива selectProduct совпадает
                // с item кликнутым элементов, то мы удаляем item из selectProduct
                return prev.filter(elem=> elem !== item)
            });  
        }
        
    }

    return (
        <div className={styles.listsSelectFood}>

            {/* Рендер по выбранным продуктам */}
            {selectProducts.map((item, index)=> {
                // Если текущий индекс элемента == indexMeal (т.е. завтрак обед или ужин)
                // Проверка делается, чтобы не отображались ВСЕ выбранные продукты, а только
                // те, которые соответствуют обеду/завтравку/ужину
                // Делаем дополнительную проверку на то, что если массив item пуст
                // то мы не рендерим его
                if (index === indexMeal && item.length > 0) {
                    return (
                        // item -- это массив со вложенными массивами, с индексами от 0 до 2
                        // вложенные массив -- это завтрак-0/обед-1/ужин-2
                        // Эти вложенные массивы как раз хронят строки, которые являются продуктами
                        item.map((i, idx) => {
                            // i -- является как раз таки тем самым выбранным элементом (проудктом)
                            return (
                                <div
                                    className={`${styles.listFoodElem} 0_${i}`}
                                    key={`${i}_${indexMeal}_${idx}`}
                                >
                                    <img
                                        src='/assets/icons/cross.png'
                                        className={styles.foodCross }
                                        onClick={(event) => deleteSelectProduct(i, index, event)}
                                    />

                                    <span className={styles.nameFood}>
                                        {i}
                                    </span>
                                </div>
                            );
                        })
                    )
                } else {
                    return null
                }
            
                
                    
                
            })}
            
        </div>
    )
}