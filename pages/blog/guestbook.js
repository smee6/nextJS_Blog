import styles from '/styles/Home.module.css'

export default function Guestbook() {
    return (
        <div className={styles.container}>
            <div className={styles.menutitle}>
                GUEST BOOK
            </div>
            <main className={styles.main}>
                Guest book
            </main>
        </div>
    )
}
