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
        <link rel="style_buttons" href="css/clock.css" />
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
              <p>
                Snoopy Pomodoro Timer&nbsp;
              </p>
              <Image
                src="/snoopycoffee.ico"
                alt="Snoopy_Coffee"
                width={100}
                height={100}
                priority
              />
            </a>
          </div>

          {/*--Timer--*/}
        <div className= "timer">
          <span className="timer__part timer__part--minutes">00</span>
          <span className="timer__part">:</span>
          <span className="timer__part timer__part--seconds">00</span>

          {/*button to start*/}
          <button type="button" className="timer__btn--control timer__btn--start">
            <i className="gg-play-button-o"></i>
          </button>

          {/*reset button*/}
          <button type="button" className="timer__btn--control--reset">
            <i className="gg-log-off"></i>
          </button>
        </div>

        {/*Snoopy dancing image*/}
          <div className={styles.grid}>
            <a>
              <Image
                src={"/snoopydance.jpg"}
                alt={"snoopy dancing"}
                height={130}
                width={140}
              />
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
