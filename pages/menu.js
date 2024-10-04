import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Menu() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FakeAway - Menu</title>
        <meta name="description" content="Explore our delicious and healthy meal options." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Our Menu</h1>
        <p className={styles.description}>Explore our delicious and healthy meal options.</p>
        {/* Add your menu items here */}
      </main>

      <footer className={styles.footer}>
        <Link href="/">Back to Home</Link>
      </footer>
    </div>
  )
}