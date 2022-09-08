import styles from '/styles/Home.module.css'
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import { useMediaQuery } from '@mui/material';

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.menutitle}>
                소개
            </div>
            <Grid container spacing={2}>
                {
                    //get screen size
                    useMediaQuery('(min-width:768px)') ?
                        <Grid item xs={4}>
                            <h3>🎆 서명인 : Developer</h3>
                            <div style={{ borderRadius: '5%' }}>
                                <Image
                                    src="/seo2.jpg"
                                    alt="me"
                                    width={250}
                                    height={280}
                                    style={{ borderRadius: '5%' }}
                                />
                            </div>
                        </Grid>
                        :
                        <Grid item xs={12}>
                            <h3>🎆 서명인 : Frontend Developer</h3>
                            <div style={{ borderRadius: '10%', overflow: '' }}>
                                <Image
                                    src="/seo2.jpg"
                                    alt="me"
                                    width={250}
                                    height={280}
                                    style={{ borderRadius: '5%' }}
                                />
                            </div>
                        </Grid>
                }
                {
                    //get screen size
                    useMediaQuery('(min-width:768px)') ?
                        <Grid item xs={8}>
                            <h3>[🙌 Intro]</h3>

                            <li> 개발을 통한 비지니스 가치를 만들고 싶은 개발자 입니다</li>
                            <li> 작곡과 아트 드로잉에도 관심이 많습니다.</li>
                            <li> 블록체인 관련 스타트업에서 프론트엔드 개발을 경험했습니다.</li>
                            <li> 현재 게임회사에서 웹,서버 개발을 맡고 있습니다.</li>

                            <h3>[🛠 Skill]</h3>
                            <li>JS,NextJS,NodeJS,Express</li>

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
                        :
                        <Grid item xs={12}>
                            <h3>[🙌 Intro]</h3>

                            <li> 개발을 통한 비지니스 가치를 만들고 싶은 개발자 입니다</li>
                            <li> 작곡과 아트 드로잉에도 관심이 많습니다.</li>
                            <li> 블록체인 관련 스타트업에서 프론트엔드 개발을 하고 있습니다.</li>

                            <h3>[🛠 Skill]</h3>
                            <li>JS,NextJS,NodeJS,Express</li>

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
                }


            </Grid>

        </div>
    )
}


