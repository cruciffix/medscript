import styles from "@/app/assets/ProgressLine.module.css";

export default function AvatarComponent() {
    return (
        <div className={styles.avatarWrapper}>
            <img className={styles.avatar} src="/assets/avatar.png" />
        </div>
    )  
}