"use client";
import styles from "@/app/assets/ProgressLine.module.css";
import { useEffect, useRef, useState } from "react";
export default function FoodDiary() {
    let meals = {
        breakfast: {
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

        lunch: {
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
    };

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
                                            <div
                                                className={
                                                    styles.seelectProduct
                                                }
                                            >
                                                <span>Укроп</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.seelectProduct
                                                }
                                            >
                                                <span>Укроп</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.seelectProduct
                                                }
                                            >
                                                <span>Укроп</span>
                                            </div>
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
