import styles from '/styles/Home.module.css'
import Grid from '@mui/material/Grid';
import Image from 'next/image'

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.menutitle}>
                소개
            </div>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h3>🎆 개발왕 서명인</h3>
                    <div style={{ borderRadius: '5%', overflow: 'hidden' }}>
                        <Image
                            src="/seo2.jpg"
                            alt="me"
                            width={350}
                            height={350}
                        />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <h3>[🙌 Intro]</h3>

                    <li> 개발만 하는 개발자가 아닙니다.</li>
                    <li> 작곡과 아트 드로잉에도 관심이 많습니다.</li>

                    <h3>[🛠 Skill]</h3>
                    <li>JS,NextJS,NodeJS,Express</li>

                    <h3>[💻 Work]</h3>

                    <li>그린웹서비스, 운영 (20.1 ~ 20.3)</li>
                    <li>(주)필더필, 웹기획 인턴 (20.12 ~ 21.1)</li>
                    <li>몽타(주), 웹개발 (21.10 ~ 22.04)</li>
                    <li>비트스타, 프론트엔드 (22.04 ~ 현재)</li>

                    <h3>[🏆 Education]</h3>
                    <li>고려대학교 부속 고등학교 (09.3~ 12.2)</li>
                    <li>서울과학기술대학교 글로벌테크노경영 (14.3 ~ 20.8) </li>
                    <li>한양대학교 공학대학원 컴퓨터공학과 (22.9 ~) </li>

                    <h3>[🧸 ETC]</h3>
                    <li>성모의집 지역아동센터 교육봉사, 자원교사</li>
                    <li>서울과학기술대학교 유도동아리, 회장 </li>
                    <li>인도네시아 국립대학 한국어 동아리, 자원교사</li>
                    <br />
                </Grid>
            </Grid>

        </div>
    )
}


