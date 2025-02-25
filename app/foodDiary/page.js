'use client';
import styles from '@/app/assets/ProgressLine.module.css';
import { checkIsOnDemandRevalidate } from 'next/dist/server/api-utils';
import { useEffect, useRef, useState } from 'react';
import CrossIcon from '../components/icons/CrossIcon';
import HeaderAnother from '../components/HeaderAnother';
import HeadlineFood from '../components/componentsPages/foodDiary/foodDiaryElem/columnSearch/HeadlineFood';
import ListProductWrapper from '../components/componentsPages/foodDiary/foodDiaryElem/columnSearch/ListProductWrapper';
import PhotoSearch from '../components/componentsPages/foodDiary/foodDiaryElem/columnSearch/PhotoSearch';
import ListsSelectFoodComponent from '../components/componentsPages/foodDiary/foodDiaryElem/columnSearch/NotListsSelectFood';
import DataNowComponent from '../components/componentsPages/foodDiary/foodDiaryElem/columnData/DataNowComponent';
import NutrientMetric from '../components/componentsPages/foodDiary/foodDiaryElem/columnData/NutrientMetric';
import IconAndSelect from '../components/componentsPages/foodDiary/foodDiaryElem/columnSearch/IconAndSelect';
import ProgressHeadline from '../components/componentsPages/foodDiary/foodDiaryProgress/ProgressHeadline';
import ResultBZU from '../components/componentsPages/foodDiary/foodDiaryProgress/ResultBZU';
import Footer from '../components/Footer';

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
    let selectIndexMeal = null;

    // Это массив выбранных продуктов
    let [selectPoductBreakfast, setSelectPoductBreakfast] = useState([]);
    let [selectProductLunch, setSelectProductLunch] = useState([])
    let [selectProductDinner, setSelectProductDinner] = useState([])
    // Все использование selectProduct.. мы используем через переменную selectProduct
    // Ее мы используем в коде
    let selectProducts = [selectPoductBreakfast, selectProductLunch, selectProductDinner]

    const [showFieldSelectProductBreakfast, setShowFieldSelectProductBreakfast] = useState(true);
    const [showFieldSelectProductLunch, setShowFieldSelectProductLunch] = useState(true);
    const [showFieldSelectProductDinner, setShowFieldSelectProductDinner] = useState(true);

    // const inputSelectProduct = useRef(null);
    const inputSelectProduct = useRef([]);
    const crossSelectProduct = useRef([]);

    const itemsProduct = useRef([]);
 

 

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
            <div className="marginHorizontal">
                <HeaderAnother h1={"Пищевой дневник"}/>
                
                    <div className={` ${styles.foodDiaryLayout}`}>
                        <div className={styles.foodDiaryWrapper}>
                            {/* Создаем три одинаковых карточки завтра | обед | ужин */}
                            {meals.map((meal, indexMeal) => {
                                return (
                                    <div 
                                        className={styles.foodDiaryElem} 
                                        style={{marginTop: indexMeal == 0 && 0 + "px"}} 
                                        key={`_${indexMeal}`}
                                    >
                                        <div className={styles.columnSearch}>
                                            <HeadlineFood indexMeal={indexMeal}/>
                                            

                                            <div className={styles.wrapperSearch}>
                                                <div className={styles.writingSearch}>
                                                    
                                                    <IconAndSelect 
                                                        inputSelectProduct={inputSelectProduct}
                                                        indexMeal={indexMeal}
                                                    />

                

                                                    {/* Открываем выпадающий список в зависимоти от приема пищи */}
                                                    <div
                                                        className={`${styles.fieldSelectProduct }
                                                        
                                                        ${indexMeal === 0 && showFieldSelectProductBreakfast && styles.dNone}
                                                        ${indexMeal === 1 && showFieldSelectProductLunch && styles.dNone}
                                                        ${indexMeal === 2 && showFieldSelectProductDinner && styles.dNone}`}
                                                    >
                                                        <ListProductWrapper 
                                                            meals={meals}
                                                            mealsZBU={mealsZBU}
                                                            crossSelectProduct={crossSelectProduct}
                                                            indexMeal={indexMeal}
                                                            selectPoductBreakfast={selectPoductBreakfast}
                                                            selectProductLunch={selectProductLunch}
                                                            selectProductDinner={selectProductDinner}
                                                            setSelectPoductBreakfast={setSelectPoductBreakfast}
                                                            setSelectProductLunch={setSelectProductLunch}
                                                            setSelectProductDinner={setSelectProductDinner}
                                                            setMealsZBU={setMealsZBU}
                                                            selectProducts={selectProducts}
                                                        />
                                                        
                                                    </div>
                                                    {/* fieldSelectProduct */}
                                                </div>

                                                <PhotoSearch />
                                            </div>
                                            <ListsSelectFoodComponent 
                                                selectProducts={selectProducts}
                                                indexMeal={indexMeal}
                                                meals={meals}
                                                mealsZBU={mealsZBU}
                                                setMealsZBU={setMealsZBU}
                                                setSelectPoductBreakfast={setSelectPoductBreakfast}
                                                setSelectProductLunch={setSelectProductLunch}
                                                setSelectProductDinner={setSelectProductDinner}
                                            />
                                            
                                        </div>
                                        {/* columnSearch */}

                                        <div className={styles.columnData}>
                                            <DataNowComponent mealsZBU={mealsZBU}/>
                                            
                                            <NutrientMetric 
                                                mealsZBU={mealsZBU}
                                                indexMeal={indexMeal}
                                            />
                                            
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

                    <div className={`marginVertivalBetweenSections ${styles.foodDiaryProgress}`}>
                        <div className={styles.foodDiaryProgressWrapper}>
                            <ProgressHeadline />
                            {/* foodDiaryProgressHeadline */}

                            <ResultBZU mealsZBU={mealsZBU} />
                            
                        </div>
                    </div>
            </div>
            <Footer />
        </>
        
    );
}
