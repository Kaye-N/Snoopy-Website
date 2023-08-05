//Home Page
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@component/styles/Home.module.css';
import clock from '@component/styles/clock.module.css';
import grid from '@component/styles/App.module.css'
import { Container } from 'react-bootstrap';

//Google fonts class 
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
              href="https://www.peanuts.com/about/snoopy"
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
        
        <Container className={clock.position}>
            {/*--Timer--*/}
          <div className= "timer">
            <span className="timer__part timer__part-minutes">00</span>
            <span className="timer__part">:</span>
            <span className="timer__part timer__part-seconds">00</span>

            {/*button to start*/}
            <button type="button" className={clock.ggplay}>
              <i className="gg-play-button-o"></i>
            </button>

            {/*reset button*/}
            <button type="button" className={clock.ggoff}>
              <i className="gg-log-off"></i>
            </button>
          </div>
        </Container>
        
        {/*Snoopy Timer options*/}
          <Container className={grid.snoopyGrid}>
              <div className='picture'>1</div>
              <div className='picture'>2</div>
              <div className='picture'>3</div>
              <div className='picture'>4</div>
          </Container>
        </div>
      </main>
    </>
  )
}
