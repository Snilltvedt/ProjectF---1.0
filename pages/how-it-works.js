import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function HowItWorks() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FakeAway - How It Works</title>
        <meta name="description" content="Learn about our process and sustainability efforts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>How It Works</h1>
        <p className={styles.description}>Learn about our process and sustainability efforts.</p>
        {/* Add your how it works content here */}
      </main>

      <footer className={styles.footer}>
        <Link href="/">Back to Home</Link>
      </footer>
    </div>
  )
}