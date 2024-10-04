import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Sustainability() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FakeAway - Sustainability</title>
        <meta name="description" content="Discover our commitment to the environment." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Our Sustainability Efforts</h1>
        <p className={styles.description}>Discover our commitment to the environment.</p>
        {/* Add your sustainability content here */}
      </main>

      <footer className={styles.footer}>
        <Link href="/">Back to Home</Link>
      </footer>
    </div>
  )
}