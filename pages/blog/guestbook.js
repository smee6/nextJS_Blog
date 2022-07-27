import styles from '/styles/Home.module.css'
import Comment from '../../components/comment'
import Styled from '@emotion/styled'

export default function Guestbook() {
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

const CommentWrap = Styled.div`
  background-color: #fafafa;
  border-radius: 10px;
`;