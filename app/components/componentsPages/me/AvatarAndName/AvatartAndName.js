import styles from '@/app/assets/ProgressLine.module.css';

export default function AvatarAndName() {
    return (
        <div className={styles.avatarAndMyNameMe}>
            <div className={styles.avatarMeWrapper}>
                <div className={styles.avatarMe}>
                    <img className={styles.avatarMeImg} src="/assets/avatar.png"/>
                </div>
            </div>

            <div className={styles.myNameWrapper}>
                <h1 className={styles.myNameValue}>Антон</h1>
            </div>
        </div>
    )
}