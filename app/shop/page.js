'use client';
import styles from '@/app/assets/ProgressLine.module.css';

export default function Shop() {
    return (
        <>
            <div className={styles.filtersCurrency}>
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

            <div className={styles.shop}>
                <div className={styles.shopWrapper}>
                    <div className={styles.headerShop}>
                        <h2>Инвентарь</h2>
                    </div>
                    <div className={styles.shopItemRow}>
                        <div className={styles.itemImg}>
                            <img src="/assets/icons/valanchik.png"/>
                        </div>

                        <div className={styles.itemPrice}>
                            <img src='/assets/icons/star.png'/>
                            <span>21</span>
                        </div>

                        <div className={styles.buy}>
                            <span>Купить</span>
                        </div>
                    </div>
                    {/* shopItemRow */}

                    <div className={styles.shopItemRow}>
                        <div className={styles.itemImg}>
                            <img src="/assets/icons/jostik.png"/>
                        </div>

                        <div className={styles.itemPrice}>
                            <img src='/assets/icons/star.png'/>
                            <span>21</span>
                        </div>

                        <div className={styles.buy}>
                            <span>Купить</span>
                        </div>
                    </div>
                    {/* shopItemRow */}

                    <div className={styles.shopItemRow}>
                        <div className={styles.itemImg}>
                            <img src="/assets/icons/cup.png"/>
                        </div>

                        <div className={styles.itemPrice}>
                            <img src='/assets/icons/star.png'/>
                            <span>21</span>
                        </div>

                        <div className={styles.buy}>
                            <span>Купить</span>
                        </div>
                    </div>
                    {/* shopItemRow */}

                    <div className={styles.shopItemRow}>
                        <div className={styles.itemImg}>
                            <img src="/assets/icons/ball1.png"/>
                        </div>

                        <div className={styles.itemPrice}>
                            <img src='/assets/icons/star.png'/>
                            <span>21</span>
                        </div>

                        <div className={styles.buy}>
                            <span>Купить</span>
                        </div>
                    </div>
                    {/* shopItemRow */}

                    <div className={styles.shopItemRow}>
                        <div className={styles.itemImg}>
                            <img src="/assets/icons/ball2.png"/>
                        </div>

                        <div className={styles.itemPrice}>
                            <img src='/assets/icons/star.png'/>
                            <span>21</span>
                        </div>

                        <div className={styles.buy}>
                            <span>Купить</span>
                        </div>
                    </div>
                    {/* shopItemRow */}

                    <div className={styles.shopItemRow}>
                        <div className={styles.itemImg}>
                            <img src="/assets/icons/ball2.png"/>
                        </div>

                        <div className={styles.itemPrice}>
                            <img src='/assets/icons/star.png'/>
                            <span>21</span>
                        </div>

                        <div className={styles.buy}>
                            <span>Купить</span>
                        </div>
                    </div>
                    {/* shopItemRow */}
                </div>
                {/* shopWrapper */}

            </div>

            <div className={styles.shop}>
                <div className={styles.shopWrapper}>
                    <div className={styles.headerShop}>
                        <h2>Магазин</h2>
                    </div>
                    <div className={styles.shopItemRow}>
                        <div className={styles.itemImg}>
                            <img src="/assets/icons/valanchik.png"/>
                        </div>

                        <div className={styles.itemPrice}>
                            <img src='/assets/icons/star.png'/>
                            <span>21</span>
                        </div>

                        <div className={styles.buy}>
                            <span>Купить</span>
                        </div>
                    </div>
                    {/* shopItemRow */}

                    <div className={styles.shopItemRow}>
                        <div className={styles.itemImg}>
                            <img src="/assets/icons/jostik.png"/>
                        </div>

                        <div className={styles.itemPrice}>
                            <img src='/assets/icons/star.png'/>
                            <span>21</span>
                        </div>

                        <div className={styles.buy}>
                            <span>Купить</span>
                        </div>
                    </div>
                    {/* shopItemRow */}

                    <div className={styles.shopItemRow}>
                        <div className={styles.itemImg}>
                            <img src="/assets/icons/cup.png"/>
                        </div>

                        <div className={styles.itemPrice}>
                            <img src='/assets/icons/star.png'/>
                            <span>21</span>
                        </div>

                        <div className={styles.buy}>
                            <span>Купить</span>
                        </div>
                    </div>
                    {/* shopItemRow */}

                    <div className={styles.shopItemRow}>
                        <div className={styles.itemImg}>
                            <img src="/assets/icons/ball1.png"/>
                        </div>

                        <div className={styles.itemPrice}>
                            <img src='/assets/icons/star.png'/>
                            <span>21</span>
                        </div>

                        <div className={styles.buy}>
                            <span>Купить</span>
                        </div>
                    </div>
                    {/* shopItemRow */}

                    <div className={styles.shopItemRow}>
                        <div className={styles.itemImg}>
                            <img src="/assets/icons/ball2.png"/>
                        </div>

                        <div className={styles.itemPrice}>
                            <img src='/assets/icons/star.png'/>
                            <span>21</span>
                        </div>

                        <div className={styles.buy}>
                            <span>Купить</span>
                        </div>
                    </div>
                    {/* shopItemRow */}

                    <div className={styles.shopItemRow}>
                        <div className={styles.itemImg}>
                            <img src="/assets/icons/ball2.png"/>
                        </div>

                        <div className={styles.itemPrice}>
                            <img src='/assets/icons/star.png'/>
                            <span>21</span>
                        </div>

                        <div className={styles.buy}>
                            <span>Купить</span>
                        </div>
                    </div>
                    {/* shopItemRow */}
                </div>
                {/* shopWrapper */}

            </div>
        </>
    )
}