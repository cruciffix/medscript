'use client';
import styles from '@/app/assets/ProgressLine.module.css';
import { checkIsOnDemandRevalidate } from 'next/dist/server/api-utils';
import { useEffect, useRef, useState } from 'react';
export default function FoodDiary() {
    // Под 0 индексом -- завтрак
    // Под 1 индексом -- обед
    // Под 2 индексом -- ужин
    let meals = [
        // Завтрак
        {
            blackDread23: {
                protein: 25,
                fats: 3434,
                carbohydrates: 124,
            },
            oatmealPorridge345: {
                protein: 12,
                fats: 45,
                carbohydrates: 100,
            },
            blackDread34232: {
                protein: 25,
                fats: 3434,
                carbohydrates: 124,
            },
        },

        // Обед
        {
            peaSoup: {
                protein: 322,
                fats: 454,
                carbohydrates: 104,
            },

            teaWithSugar: {
                protein: 0,
                fats: 0,
                carbohydrates: 20,
            },
        },
        // Ужин
        {
            cheasNurger: {
                protein: 1,
                fats: 1,
                carbohydrates: 1,
            },
        },
    ];

    let [mealsZBU, setMealsZBU] = useState([
        {
            // 0 --русское название, 1 -- каллораж
            proteins: ['Белки', 0],
            fats: ['Жиры', 0],
            carbohydrates: ['Углеводы', 0],
        },
    ]);

    // selectIndexMeal = порядкойвый номер приемя пищи. Используем чтобы отображать
    // Еду в заивисмоти от приема
    let selectIndexMeal = null

    // Это массив выбранных продуктов
    let [selectPoduct, setSelectProduct] = useState([]);

    const [showFieldSelectProductBreakfast, setShowFieldSelectProductBreakfast] = useState(true);
    const [showFieldSelectProductLunch, setShowFieldSelectProductLunch] = useState(true);
    const [showFieldSelectProductDinner, setShowFieldSelectProductDinner] = useState(true);

    // const inputSelectProduct = useRef(null);
    const inputSelectProduct = useRef([]);

    const itemsProduct = useRef([]);
    
    function selectingProduct(event) {
        // Тут мы делаем проверку для того, чтобы дважды нельзя выбрать один и тот же продукт
        
        if (!selectPoduct.includes(event.target.innerHTML.trim())) {
            // Меняем цвета выбраного продукта
            event.target.classList.remove(styles.notSelectItemProductText);
            event.target.classList.add(styles.selectItemProductText);

            // Подтягиваем каллораж вместе с блюдами
            // Берем названия продукта
            let productName = event.target.innerHTML.trim();
            // Выбираем завтрак / обед / ужин и подставляем название продукта productName
            // Получаем БЖУ
            let productZBU = meals[0][productName];
            // Суммируем значение в zbu
            let sumP = mealsZBU[0]['proteins'][1] + productZBU['protein'];
            let sumF = mealsZBU[0]['fats'][1] + productZBU['fats'];
            let sumC =
                mealsZBU[0]['carbohydrates'][1] + productZBU['carbohydrates'];

            // Вносим sumP, sumF, sumC в mealsZBU, заставляя его менять
            setMealsZBU((prev) => {
                return [
                    ...prev,
                    ((prev[0]['proteins'][1] = sumP),
                    ((prev[0]['fats'][1] = sumF),
                    (prev[0]['carbohydrates'][1] = sumC))),
                ];
            });

            setSelectProduct((prev) => {
                // Добавляем в массив выбранных продуктов
                return [...prev, event.target.innerHTML.trim()];
            });
        }
    }

    // Удаление выбранного продукта
    function deleteSelectProduct(event, item) {
        // Отменяем цвета выбранного продкута, возвращая дефлотные
        itemsProduct.current.forEach((i) => {
            if (item === i.innerHTML) {
                i.classList.remove(styles.selectItemProductText);
                i.classList.add(styles.notSelectItemProductText);
            }
        });

        // Подтягиваем каллораж вместе с блюдами
        // Берем названия кликнутого продукта
        let productName = item;
        // Выбираем завтрак / обед / ужин и подставляем название продукта productName

        // Получаем БЖУ
        // productZBU -- еда с колоражем из общего массива meals
        let productZBU = meals[0][productName];
        // currntNutricies-- текущие нутриэлементы
        let currntNutricies = mealsZBU[0];

        let minusP = currntNutricies['proteins'][1] - productZBU['protein'];
        let minusF = currntNutricies['fats'][1] - productZBU['fats'];
        let minusC =
            currntNutricies['carbohydrates'][1] - productZBU['carbohydrates'];

        setMealsZBU((prev) => {
            return [
                ...prev,
                ((prev[0]['proteins'][1] = minusP),
                ((prev[0]['fats'][1] = minusF),
                (prev[0]['carbohydrates'][1] = minusC))),
            ];
        });

        // Используем хук юзстейст
        setSelectProduct((prev) => {
            // Проходимся по массива selectProduct, который содержит в себе
            // выбранные продукты
            return prev.map((elem) => {
                // Если текущий prev элемент из массива selectProduct совпадает
                // с item кликнутым элементов, то мы удаляем item из selectProduct
                if (elem == item) {
                    prev.splice(prev.indexOf(item), 1);
                    return;
                }
                return elem;
            });
        });
    }

    useEffect(() => {
        if (inputSelectProduct && itemsProduct) {
            // Проходимся по циклу и вешаем обрабочтик на каждый инпут Выбирите продукт
            inputSelectProduct.current.forEach((elem, index)=> {
                elem.addEventListener("click", ()=> {
                    selectIndexMeal = index;
                    index == 0 && setShowFieldSelectProductBreakfast((prev) => !prev);
                    index == 1 && setShowFieldSelectProductLunch((prev) => !prev);
                    index == 2 && setShowFieldSelectProductDinner((prev) => !prev);

                })
            })
        
        }
    }, []);

    return (
        <>
            <div className={styles.foodDiaryLayout}>
                <div className={styles.foodDiaryWrapper}>
                    {/* Создаем три одинаковых карточки завтра | обед | ужин */}
                    {meals.map((meal, indexMeal) => {
                        return (
                            <div className={styles.foodDiaryElem} key={`_${indexMeal}`}>
                                <div className={styles.columnSearch}>
                                    <div
                                        className={
                                            styles.foodDiaryHeaderWrapper
                                        }
                                    >
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

                                    <div className={styles.wrapperSearch}>
                                        <div className={styles.writingSearch}>
                                            <img src='/assets/icons/search.png' />

                                            <div
                                                className={`${styles.inputSearch} ${indexMeal}_mealsFlag`}
                                                ref={(el) =>{
                                                    inputSelectProduct.current[indexMeal] = el
                                                }}
                                                
                                            >
                                                <span>Выбирите продукт</span>
                                            </div>

                                            {/* Открываем выпадающий список в зависимоти от приема пищи */}
                                            <div
                                                className={`${styles.fieldSelectProduct }
                                                
                                                ${indexMeal === 0 && showFieldSelectProductBreakfast && styles.dNone}
                                                ${indexMeal === 1 && showFieldSelectProductLunch && styles.dNone}
                                                ${indexMeal === 2 && showFieldSelectProductDinner && styles.dNone}`}
                                            >
                                                <div
                                                    className={
                                                        styles.listProductWrapper
                                                    }
                                                >
                                                    {/* Здесь мы проходим по ключам объекта meals, в которых */}
                                                    {/* Записаны название продуктов доступных для определенного приема пищи, */}
                                                    {/* в данном случае для завтрака */}
                                                    {meals.map((item, index) => {
                                                        // item -- завтрак / обед / ожин
                                                        // if (index === 0) {
                                                        
                                                            return Object.keys(item).map((i, idx) => {
                                                                return (
                                                                    <div>
                                                                        <span
                                                                            key={`${i}_${idx}`}
                                                                            // ${index}_mealsFlag -- ялвяется флагом для обозначения еды
                                                                            className={`${styles.itemProductName} ${styles.notSelectItemProductText} ${index}_mealsFlag`}
                                                                            ref={(el) =>(itemsProduct.current[idx] = el)}
                                                                            onClick={(event) => { selectingProduct(event);}}
                                                                        >
                                                                            {i}
                                                                        </span>
                                                                    </div>
                                                                );
                                                            });
                                                        // }
                                                    })}
                                                   
                                                </div>
                                            </div>
                                            {/* fieldSelectProduct */}
                                        </div>

                                        <div className={styles.photoSearch}>
                                            <img src='/assets/icons/photo.png' />
                                        </div>
                                    </div>

                                    <div className={styles.listsSelectFood}>
                                        {selectPoduct.map((item, index) => {
                                            return (
                                                <div
                                                    className={`${styles.listFoodElem} 0_${item}`}
                                                    key={`${item}_${index}`}
                                                >
                                                    <img
                                                        src='/assets/icons/cross.png'
                                                        className={
                                                            styles.foodCross
                                                        }
                                                        onClick={(event) =>
                                                            deleteSelectProduct(
                                                                event,
                                                                item,
                                                            )
                                                        }
                                                    />

                                                    <span
                                                        className={
                                                            styles.nameFood
                                                        }
                                                    >
                                                        {item}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                {/* columnSearch */}

                                <div className={styles.columnData}>
                                    <h3 className={styles.columnDataHeadline}>
                                        23.11.24
                                    </h3>

                                    <>
                                        {mealsZBU.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    {Object.keys(item).map(
                                                        (key) => (
                                                            <div
                                                                className={
                                                                    styles.nutrients
                                                                }
                                                                key={key}
                                                            >
                                                                <span
                                                                    className={
                                                                        styles.nutrientName
                                                                    }
                                                                >
                                                                    {
                                                                        item[
                                                                            key
                                                                        ][0]
                                                                    }{' '}
                                                                    (г)
                                                                </span>
                                                                <span
                                                                    className={
                                                                        styles.nutrientWeight
                                                                    }
                                                                >
                                                                    {
                                                                        item[
                                                                            key
                                                                        ][1]
                                                                    }
                                                                </span>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </>

                                    {/* nutrients */}
                                </div>
                                {/* columnData */}
                            </div>
                        );
                        {
                            /* foodDiaryElem */
                        }
                    })}
                </div>
            </div>
        </>
    );
}
