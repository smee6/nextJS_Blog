import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Button from '@mui/material/Button';


export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href='./posts/sample'>
            <Button variant="outlined">
              이쪽을 클릭하세요
            </Button>
          </Link>
          <Link href='./counter'>
            <Button variant="outlined">
              카운터 테스트
            </Button>
          </Link>
        </h1>

      </main>

    </div>
  )
}
