import styles from '@/app/assets/ProgressLine.module.css';

export default function FilterShopOrInvent() {
    return (
        <div className={styles.filter}>
            <img src='/assets/icons/filter.png'/>
            <span>Фильтр</span>
        </div>
    )
}