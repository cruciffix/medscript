'use client';
import styles from '@/app/assets/ProgressLine.module.css';

import { useState } from 'react';
import HeaderAnother from '../components/HeaderAnother';

export default function Shop() {
    let [itemPageShop, setItemPageShop] = useState([
        {
            id: "valanchik",
            value: "Валанчик",
            img: "/assets/icons/valanchik.png",
            price: 21,
        },
   
        {
            id: "jostik",
            value: "Джойстик",
            img: "/assets/icons/jostik.png",
            price: 31,
            
        },

        {
            id: "cup",
            value: "Кубрк",
            img: "/assets/icons/cup.png",
            price: 21,
            
        },

        {
            id: "ball1",
            value: "Мяч для американского футбола",
            img: "/assets/icons/ball1.png",
            price: 35,
            
        },

        {
            id: "ball2",
            value: "Мяч для баскетбола",
            img: "/assets/icons/ball2.png",
            price: 345,
            
        },

    ])
    return (
        
        <div className="marginHorizontal">
            <HeaderAnother h1={"Магазин"}/>
            <>
                <div className={`${styles.filtersCurrency}`}>
                    <div className={styles.filtersCurrencyWrapper}>
                        <div className={styles.filter}>
                            <img src='/assets/icons/filter.png'/>
                            <span>Фильтр</span>
                        </div>

                        <div className={styles.currency}>
                            <img src='/assets/icons/star.png'/>
                            <span>21</span>
                        </div>
                    </div>
                </div>

                {/* Секция с инвентарем */}
                <div className={`marginVertivalBetweenSections`}>
                    <div className={styles.shopWrapper}>
                        <div className={styles.headerShop}>
                            <h2>Инвентарь</h2>
                        </div>

                            {itemPageShop.map(item => {
                                return ( <div className={styles.inventoryItemRow}>
                                    <div className={styles.itemImg}>
                                        <img src={item.img}/>
                                    </div>

                                    <div className={styles.itemPrice}>
                                        <span>{item.value}</span>
                                    </div>

                                </div>
                                )
                                {/* shopItemRow */}
                            })}
                            

                    </div>
                    {/* shopWrapper */}
                </div>

                
                {/* Секция с магазином */}
                <div className={`marginVertivalBetweenSections`}>
                    <div className={styles.shopWrapper}>
                        <div className={styles.headerShop}>
                            <h2>Магазин</h2>
                        </div>

                            {itemPageShop.map(item => {
                                return (
                                <div className={styles.shopItemRow}>
                                    <div className={styles.itemImg}>
                                        <img src={item.img}/>
                                    </div>

                                    <div className={`${styles.itemPrice} ${styles.shopRow}`}>
                                        <img src='/assets/icons/star.png'/>
                                        <span>{item.price}</span>
                                    </div>
                                    
                                    <div>
                                        <span className={styles.buy}>Купить</span>
                                    </div>

                                </div>
                                )
                                {/* shopItemRow */}
                            })}
                    </div>
                    {/* shopWrapper */}
                </div>
                
            </>
        </div>
    )
}