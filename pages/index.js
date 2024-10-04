import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FakeAway - Skip the Cooking, Not the Comfort!</title>
        <meta name="description" content="Delicious, healthier meals delivered in reusable containers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Skip the Cooking, Not the Comfort!
        </h1>

        <p className={styles.description}>
          Delicious, healthier meals delivered in reusable containers. Because good food shouldn't cost the earth.
        </p>

        <div className={styles.grid}>
          <Link href="/menu">
            <div className={styles.card}>
              <h2>Menu &rarr;</h2>
              <p>Explore our delicious meal options.</p>
            </div>
          </Link>

          <Link href="/how-it-works">
            <div className={styles.card}>
              <h2>How It Works &rarr;</h2>
              <p>Learn about our process and sustainability efforts.</p>
            </div>
          </Link>

          <Link href="/reviews">
            <div className={styles.card}>
              <h2>Reviews &rarr;</h2>
              <p>See what our customers are saying.</p>
            </div>
          </Link>

          <Link href="/sustainability">
            <div className={styles.card}>
              <h2>Sustainability &rarr;</h2>
              <p>Discover our commitment to the environment.</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 FakeAway. All rights reserved.</p>
      </footer>
    </div>
  )
}