import styles from '/styles/Home.module.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image'

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.menutitle}>
                소개
            </div>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div style={{ borderRadius: '5%', overflow: 'hidden' }}>
                        <Image
                            src="/seo2.jpg"
                            alt="me"
                            width={300}
                            height={300}
                        />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <b>서명인</b> <br />
                    💻 Frontend Developer <br />

                </Grid>
            </Grid>

        </div>
    )
}
