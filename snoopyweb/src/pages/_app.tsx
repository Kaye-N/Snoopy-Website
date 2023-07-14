import 'bootstrap/dist/css/bootstrap.min.css';
import '@component/styles/globals.css'
import styles from "@component/styles/App.module.css";
import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Container } from 'react-bootstrap';


const inter = Inter({subsets: ['latin']});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title>Snoopy Pomodoro Timer</title>
        <meta name="description" content="Website about Snoopy" />
        <meta name= "keywords" content= "Snoopy, Peanuts"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel = "app module" href = "/styles/App.module.css" />
        <link rel = "clock module" href = "/styles/clock.module.css" />
        <link href='https://unpkg.com/css.gg@2.0.0/icons/css/play-button-o.css' rel='stylesheet'/>
        <link href='https://unpkg.com/css.gg@2.0.0/icons/css/log-off.css' rel='stylesheet'/>
      </Head>
      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
