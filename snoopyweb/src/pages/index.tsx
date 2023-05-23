import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        {/*Meta Data*/}
        <title>A Snoopy Corner</title>
        <meta name="description" content="Website about Snoopy" />
        <meta name= "keywords" content= "Snoopy, Peanuts"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              /*Open empty page*/
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
            Snoopy
              <Image
                src="/snoopycoffee.ico"
                alt="Snoopy_Coffee"
                width={100}
                height={100}
                priority
              />
            </a>
            Snoopy&#39;s favorite food are root beer and pizza
          </div>

        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="new_page"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              2000&#39;s Snoopy
            </h2>
            <p className={inter.className}>
              Find more 2000&#39;s snoopy&nbsp;here.
            </p>
            <Image
            src="/snoopyshow.png"
            alt="snoopy sitting"
            height={160}
            width={150}
            priority
          />
          </a>
        </div>
      </main>
    </>
  )
}
