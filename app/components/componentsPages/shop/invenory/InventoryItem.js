import styles from '@/app/assets/ProgressLine.module.css';

export default function InventoryItem({inventoryPageShop}) {
    return (
        <>
            {inventoryPageShop.map(item => {
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
        </>
    )
}