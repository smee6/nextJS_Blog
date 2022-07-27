/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import styles from '/styles/Home.module.css'
import { NotionRenderer } from "react-notion";
import Styled from '@emotion/styled'
const ResumeDiv = Styled.div`
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 10px;
    max-width: 768px;
    `;


export async function getStaticProps() {
    const data = await fetch(
        "https://notion-api.splitbee.io/v1/page/0199edda14844aa6b9a192954f6bc19a"
    ).then(res => res.json());
    return {
        props: {
            blockMap: data
        }
    };
}

export default ({ blockMap }) => (


    <div className={styles.container}>
        <div className={styles.menutitle}>
            이력서
        </div>
        <main className={styles.main}>
            <ResumeDiv>
                <div style={{ maxWidth: 768 }}>
                    <NotionRenderer blockMap={blockMap} />
                </div>
            </ResumeDiv>
        </main>
        <br />
    </div>
);

