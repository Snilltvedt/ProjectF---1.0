import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Reviews() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FakeAway - Reviews</title>
        <meta name="description" content="See what our customers are saying about FakeAway." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Customer Reviews</h1>
        <p className={styles.description}>See what our customers are saying about FakeAway.</p>
        {/* Add your reviews content here */}
      </main>

      <footer className={styles.footer}>
        <Link href="/">Back to Home</Link>
      </footer>
    </div>
  )
}