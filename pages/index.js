import styles from '../styles/Home.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.mainhome}>
        <Card variant="outlined">
          <CardContent>This is Card</CardContent>
        </Card>

      </main>

    </div>
  )
}
