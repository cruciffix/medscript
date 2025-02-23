import styles from '@/app/assets/ProgressLine.module.css';


export default function ShopItem({itemPageShop}) {
    return (
        <>
            {itemPageShop.map((item, index) => {
                return (
                <div key={`${item}_${index}`} className={styles.shopItemRow}>
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
        </>
    )
}