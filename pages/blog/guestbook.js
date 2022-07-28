import styles from '/styles/Home.module.css'
import Comment from '../../components/comment'
import Styled from '@emotion/styled'

export default function Guestbook() {

    const CommentWrap = Styled.div`
    background-color: #141515;
    border-radius: 10px;
    `;

    return (
        <div className={styles.container}>

            <div className={styles.menutitle}>
                방명록
            </div>

            <CommentWrap>
                <Comment repo="smee6/nextJS_Blog_Comment" />
                <br />
            </CommentWrap>

            <br />
        </div>
    )
}
