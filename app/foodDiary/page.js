"use client";
import styles from "@/app/assets/ProgressLine.module.css";
import { useEffect, useRef, useState } from "react";
export default function FoodDiary() {
    // Под 0 индексом -- завтрак
    // Под 1 индексом -- обед
    // Под 2 индексом -- ужин
    let meals = [
        // Завтрак
        {
            oatmealPorridge: {
                protein: 12,
                fats: 45,
                carbohydrates: 100,
            },
            blackDread: {
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
    ];

    const [showFieldSelectProduct, setShowFieldSelectProduct] = useState(true);
    const fieldSelectProduct = useRef(null);
    const inputSelectProduct = useRef(null);

    useEffect(() => {
        if (fieldSelectProduct && inputSelectProduct) {
            inputSelectProduct.current.addEventListener("click", () =>
                setShowFieldSelectProduct((prev) => !prev)
            );
        }
    }, []);

    return (
        <>
            <div className={styles.foodDiaryLayout}>
                <div className={styles.foodDiaryWrapper}>
                    <div className={styles.foodDiaryElem}>
                        <div className={styles.columnSearch}>
                            <div className={styles.foodDiaryHeaderWrapper}>
                                <h2 className={styles.foodDiaryHeader}>
                                    Завтрак
                                </h2>
                                <img
                                    className={styles.foodDiaryWhat}
                                    src="/assets/icons/what.png"
                                />
                            </div>

                            <div className={styles.wrapperSearch}>
                                <div className={styles.writingSearch}>
                                    <img src="/assets/icons/search.png" />
                                    {/* <input
                                        type="text"
                                        className={styles.inputSearch}
                                        placeholder="Выбирите продукт"
                                        ref={inputSelectProduct}
                                    /> */}
                                    <div
                                        className={styles.inputSearch}
                                        ref={inputSelectProduct}
                                    >
                                        <span>Выбирите продукт</span>
                                    </div>
                                    <div
                                        className={`${
                                            styles.fieldSelectProduct
                                        } ${
                                            showFieldSelectProduct &&
                                            styles.dNone
                                        }`}
                                        ref={fieldSelectProduct}
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
                                                if (index === 0) {
                                                    for (let i of Object.keys(
                                                        item
                                                    )) {
                                                        return (
                                                            <div
                                                                key={`${item}_${index}`}
                                                                className={
                                                                    styles.selectProduct
                                                                }
                                                            >
                                                                <span>{i}</span>
                                                            </div>
                                                        );
                                                    }
                                                }
                                            })}
                                        </div>
                                    </div>
                                    {/* fieldSelectProduct */}
                                </div>

                                <div className={styles.photoSearch}>
                                    <img src="/assets/icons/photo.png" />
                                </div>
                            </div>

                            <div className={styles.listsSelectFood}>
                                <div className={styles.listFoodElem}>
                                    <img
                                        src="/assets/icons/cross.png"
                                        className={styles.foodCross}
                                    />

                                    <span className={styles.nameFood}>
                                        Каша овсянная
                                    </span>
                                </div>

                                <div className={styles.listFoodElem}>
                                    <img
                                        src="/assets/icons/cross.png"
                                        className={styles.foodCross}
                                    />

                                    <span className={styles.nameFood}>Рис</span>
                                </div>

                                <div className={styles.listFoodElem}>
                                    <img
                                        src="/assets/icons/cross.png"
                                        className={styles.foodCross}
                                    />

                                    <span className={styles.nameFood}>
                                        Хлеб
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* columnSearch */}

                        <div className={styles.columnData}>
                            <h3 className={styles.columnDataHeadline}>
                                23.11.24
                            </h3>

                            <div className={styles.nutrients}>
                                <span className={styles.nutrientName}>
                                    Белки (г)
                                </span>
                                <span className={styles.nutrientWeight}>
                                    10
                                </span>
                            </div>
                            {/* nutrients */}

                            <div className={styles.nutrients}>
                                <span className={styles.nutrientName}>
                                    Жиры (г)
                                </span>
                                <span className={styles.nutrientWeight}>
                                    10
                                </span>
                            </div>
                            {/* nutrients */}

                            <div className={styles.nutrients}>
                                <span className={styles.nutrientName}>
                                    Белки (г)
                                </span>
                                <span className={styles.nutrientWeight}>
                                    10
                                </span>
                            </div>
                            {/* nutrients */}
                        </div>
                        {/* columnData */}
                    </div>
                    {/* foodDiaryElem */}
                </div>
            </div>
        </>
    );
}
