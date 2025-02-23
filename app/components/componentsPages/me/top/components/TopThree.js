import styles from '@/app/assets/ProgressLine.module.css';
import Image from 'next/image';
import testAvatarImage from "@/app/assets/medscript/children/avatarForTest.png"
import star from "@/app/assets/medscript/another/icon_png/star.png"

export default function TopThree() {
    const topUsers = [
        {
            name: "Сана",
            avatar: "@/app/assets/medscript/another/icon_png/star.png",
            score: 1234
        },

        {
            name: "Леша",
            avatar: "@/app/assets/medscript/another/icon_png/star.png",
            score: 124
        },

        {
            name: "Маша",
            avatar: "@/app/assets/medscript/another/icon_png/star.png",
            score: 123
        }
    ]
    return (
        <div className={styles.topThree}>
            {
                topUsers.map((item, index) => {
                    return (
                        <div className={styles.rowTop}>
                            <div className={styles.avatarAndNameWrapper}>
                                <span className={styles.numberTopThree}>#{index + 1}</span>

                                <div className={styles.avatarImageWrapper}>
                                    <Image alt={"avatar" + item.name} className={styles.avatarImgTopThree} src={testAvatarImage}/>
                                </div>

                                <span className={styles.nameTopThree}>{item.name}</span>
                            </div>

                            <div className={styles.pointsTopThreeWrapper}>
                                <Image alt='starScore' className={styles.starTop} src={star}/>
                                <span className={styles.points}>{item.score}</span>
                            </div>
                        </div>
                    )
                })
            }
            

            
        </div>
    )
}