'use client';
import styles from '@/app/assets/ProgressLine.module.css';

import { useState } from 'react';
import HeaderAnother from '../components/HeaderAnother';
import FilterShopOrInvent from '../components/componentsPages/shop/filterAndRating/FilterShopOrInvent';
import CurrencyShop from '../components/componentsPages/shop/filterAndRating/CurrencyShop';
import InventoryItem from '../components/componentsPages/shop/invenory/InventoryItem';
import ShopItem from '../components/componentsPages/shop/invenory/ShopItem';
import Footer from '../components/Footer';

export default function Shop() {
    const [itemPageShop, setItemPageShop] = useState([
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
    const [inventoryPageShop, setInventoryPageShop] = useState([
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
    ])
    return (
        <>
            <div className="marginHorizontal">
                <HeaderAnother h1={"Магазин"}/>
                <>
                    <div className={`${styles.filtersCurrency}`}>
                        <div className={styles.filtersCurrencyWrapper}>
                            <FilterShopOrInvent />
                            <CurrencyShop />
                        </div>
                    </div>

                    {/* Секция с инвентарем */}
                    <div className={`marginVertivalBetweenSections`}>
                        <div className={styles.shopWrapper}>
                            <div className={styles.headerShop}>
                                <h2>Инвентарь</h2>
                            </div>
                            <InventoryItem inventoryPageShop={inventoryPageShop}/>
                        </div>
                        {/* shopWrapper */}
                    </div>

                    
                    {/* Секция с магазином */}
                    <div className={`marginVertivalBetweenSections`}>
                        <div className={styles.shopWrapper}>
                            <div className={styles.headerShop}>
                                <h2>Магазин</h2>
                            </div>
                                <ShopItem itemPageShop={itemPageShop}/>
                            
                        </div>
                        {/* shopWrapper */}
                    </div>
                    
                </>
            </div>
            <Footer />
        </>
    )
}