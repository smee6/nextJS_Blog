import styles from '/styles/Home.module.css'
import Comment from '../../components/comment'
import Styled from '@emotion/styled'
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Guestbook() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const CommentWrap = Styled.div`
    background-color: ${prefersDarkMode ? '#141515' : '#fafafa'};
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
