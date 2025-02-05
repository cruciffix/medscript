'use client';
import styles from '@/app/assets/ProgressLine.module.css';
import { checkIsOnDemandRevalidate } from 'next/dist/server/api-utils';
import { useEffect, useRef, useState } from 'react';
import CrossSVG from '../components/icons/CrossSVG';
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
        {
            // 0 --русское название, 1 -- каллораж
            proteins: ['Белки', 0],
            fats: ['Жиры', 0],
            carbohydrates: ['Углеводы', 0],
        },
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
    let [selectPoductBreakfast, setSelectPoductBreakfast] = useState([]);
    let [selectProductLunch, setSelectProductLunch] = useState([])
    let [selectProductDinner, setSelectProductDinner] = useState([])
    let selectProducts = [selectPoductBreakfast, selectProductLunch, selectProductDinner]

    const [showFieldSelectProductBreakfast, setShowFieldSelectProductBreakfast] = useState(true);
    const [showFieldSelectProductLunch, setShowFieldSelectProductLunch] = useState(true);
    const [showFieldSelectProductDinner, setShowFieldSelectProductDinner] = useState(true);

    // const inputSelectProduct = useRef(null);
    const inputSelectProduct = useRef([]);
    const crossSelectProduct = useRef([]);

    const itemsProduct = useRef([]);
    
    function selectingProduct(event, index) {
        // Тут мы делаем проверку для того, чтобы дважды нельзя выбрать один и тот же продукт
    
        if (!selectPoductBreakfast.includes(event.target.innerHTML.trim())) {
            // Меняем цвета выбраного продукта
            event.target.classList.remove(styles.notSelectItemProductText);
            event.target.classList.add(styles.selectItemProductText);

            // Подтягиваем каллораж вместе с блюдами
            // Берем названия продукта
            let productName = event.target.innerHTML.trim();
            // Выбираем завтрак / обед / ужин и подставляем название продукта productName
            // Получаем БЖУ
            let productZBU = meals[index][productName];
            // Суммируем значение в zbu
            
            let ftest = mealsZBU[index]['proteins'][1]
            let sumP = Number(mealsZBU[index]['proteins'][1]) + Number(productZBU['protein']);
            let sumF = Number(mealsZBU[index]['fats'][1]) + Number(productZBU['fats']);
            let sumC =
                Number(mealsZBU[index]['carbohydrates'][1]) + Number(productZBU['carbohydrates']);
            // Вносим sumP, sumF, sumC в mealsZBU, заставляя его менять
            setMealsZBU((prev) => {
                let copyPrev = [...prev];
                copyPrev[index] ={
                    proteins: [...copyPrev[index]["proteins"], copyPrev[index]["proteins"][1] = sumP],
                    fats: [...copyPrev[index]["fats"], copyPrev[index]["fats"][1] = sumF],
                    carbohydrates: [...copyPrev[index]["carbohydrates"], copyPrev[index]["carbohydrates"][1] = sumC]
                }
                
                
                return copyPrev
            });
            mealsZBU
            
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

    // Удаление выбранного продукта
    function deleteSelectProduct(item, idx, event) {
        // Отменяем цвета выбранного продкута, возвращая дефлотные
        let elemNotSelect = document.querySelector(`#${item}`);
        debugger
        elemNotSelect.classList.remove(styles.selectItemProductText);
        elemNotSelect.classList.add(styles.notSelectItemProductText);

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
        mealsZBU
        setMealsZBU((prev) => {
            const copyPrev = [...prev];
            copyPrev[idx] ={
                proteins: [...copyPrev[idx]["proteins"], copyPrev[idx]["proteins"][1] = minusP],
                fats: [...copyPrev[idx]["fats"], copyPrev[idx]["fats"][1] = minusF],
                carbohydrates: [...copyPrev[idx]["carbohydrates"], copyPrev[idx]["carbohydrates"][1] = minusC]
            }
            return copyPrev
        });
        

        // Используем хук юзстейст
        if (idx === 0) {
            setSelectPoductBreakfast((prev) => {
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
        } else if (idx === 1) {
            setSelectProductLunch((prev) => {
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
        } else if (idx === 2) {
            setSelectProductDinner((prev) => {
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
        
    }

    useEffect(() => {
        if (inputSelectProduct && crossSelectProduct) {
            // Проходимся по циклу и вешаем обрабочтик на каждый инпут Выбирите продукт
            
            inputSelectProduct.current.forEach((elem, index)=> {
                crossSelectProduct.current[index].addEventListener("click",()=> {
                    selectIndexMeal = index;
                    index == 0 && setShowFieldSelectProductBreakfast((prev) => !prev);
                    index == 1 && setShowFieldSelectProductLunch((prev) => !prev);
                    index == 2 && setShowFieldSelectProductDinner((prev) => !prev);
                })
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
                                                ref={(el) =>{inputSelectProduct.current[indexMeal] = el}}
                                                
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
                                                <div className={ styles.listProductWrapper} >
                                                    {/* Здесь мы проходим по ключам объекта meals, в которых */}
                                                    {/* Записаны название продуктов доступных для определенного приема пищи, */}
                                                    
                                                    <CrossSVG width={16} height={16}
                                                    className={styles.closeListProductWrapper}
                                                    ref={(el) =>{crossSelectProduct.current[indexMeal] = el}}/>
                                                    {meals.map((item, index) => {
                                                        // item -- завтрак / обед / ожин
                                                        // if (index === 0) {
                                                            if (index === indexMeal) {
                                                                return Object.keys(meals[indexMeal]).map((i, idx) => {
                                                                    return (
                                                                        <div>
                                                                            <span
                                                                                key={`${i}_${idx}`}
                                                                                // ${index}_mealsFlag -- ялвяется флагом для обозначения еды
                                                                                className={`${styles.itemProductName} ${styles.notSelectItemProductText} ${index}_mealsFlag`}
                                                                                onClick={(event) => { selectingProduct(event, index);}}
                                                                                id={i}
                                                                            >
                                                                                {i}
                                                                            </span>
                                                                        </div>
                                                                    );
                                                                });
                                                            }
                                                            
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


                                        {selectProducts.map((item, index)=> {

                                            if (index === indexMeal) {
                                                return (
                                                    item.map((i, idx) => {
                                                        debugger
                                                        return (
                                                            <div
                                                                className={`${styles.listFoodElem} 0_${i}`}
                                                                key={`${i}_${idx}`}
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
                                            }
                                          
                                            
                                                
                                            
                                        })}
                                        
                                    </div>
                                </div>
                                {/* columnSearch */}

                                <div className={styles.columnData}>
                                    <h3 className={styles.columnDataHeadline}>
                                        23.11.24
                                    </h3>

                                    <> {}
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
                                                                    <span lassName={styles.nutrientWeight}>
                                                                        {item[key][1]}
                                                                    </span>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                );
                                            }
                                            
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

            <div className={styles.foodDiaryProgress}>
                <div className={styles.foodDiaryProgressWrapper}>
                    <div className={styles.foodDiaryProgressHeadline}>
                        <span className={styles.reslutOfDayText}>Результат за день</span>
                        <span className={styles.reslutOfDayCount}>6 / 10</span>
                    </div>
                    {/* foodDiaryProgressHeadline */}

                    <div className={styles.resultBZUWrapper}>
                        <div className={styles.resultBZURow}>
                            <div className={styles.resultBZUImg}>
                                <img src='/assets/icons/chicken.png'/>
                            </div>
                            <div className={styles.resultBZUName}>
                                <span>Белки</span>
                            </div>
                            <div className={styles.resultBZUCount}>
                                <span>22</span>
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
                                <span>22</span>
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
                                <span>22</span>
                            </div>

                        </div>
                        {/* resultBZURow */}
                    </div>
                </div>
            </div>
        </>
    );
}
