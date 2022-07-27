import styles from '/styles/Home.module.css'

export default function error() {
    return (
        <div className={styles.container}>
            <div className={styles.menutitle}>
                404
            </div>
            <main className={styles.main}>
                OOPS! 페이지가 없습니다! 다시 시도해 주세요!
            </main>
            <br />
        </div>
    )
}