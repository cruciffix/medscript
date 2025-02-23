import styles from '@/app/assets/ProgressLine.module.css';
import Image from 'next/image';
import star from "@/app/assets/medscript/another/icon_png/star.png"
import avatar from "@/app/assets/medscript/another/chel.png"

export default function Header() {
    return (
            <div className={styles.headerInfoAboutMyProgress}>
                <div className={styles.nameAndNumberOfTop}>
                    <h4 className={styles.nameAndNumberOfTopValue}>Антон</h4>
                    <h4 className={styles.nameAndNumberOfTopValue}>#7</h4>
                </div>

                <div className={styles.avatarMyProgpressWrapper}>
                    <Image alt="avatarMe" className={styles.avatarMyProgpress} src={avatar}/>
                </div>

                <div className={styles.myScoreWrapper}>
                    <Image alt="starScore" src={star}/>
                    <span className={styles.myScore}>1322</span>
                </div>
            </div>
    )
}