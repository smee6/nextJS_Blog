import styles from '/styles/Home.module.css'
import Comment from '../../components/comment'

export default function Guestbook() {
    return (
        <div className={styles.container}>
            <div className={styles.menutitle}>
                방명록
            </div>
            <Comment repo="smee6/nextJS_Blog_Comment" />
            <br />
        </div>
    )
}
