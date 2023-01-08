import '../styles/globals.css'
import './components/AppBar/AppBarMainMenu.css';
import './components/AboutComicsFriends/AboutComicsFriends.css';
import AppBarMainMenu from './components/AppBar/AppBarMainMenu';
import Footer from './components/Footer/Footer';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from 'next/head';
import { useEffect, useState } from 'react';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {

  const [os, setOs] = useState(null);


  /*Need for the background animation depending of device OS*/
  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('Android') !== -1) {
      setOs('Android');
    } else if (userAgent.indexOf('iOS') !== -1) {
      setOs('iOS');
      console.log('ios');
    }
    console.log(os);
  }, []);

  return (
    <>
      {os === 'Android' ? <style jsx global>{`
    @media (max-width: 1024px) {
        body {
          background: url('/images/mainBackground_v2.jpg') fixed;
          animation: moveBg 45s linear infinite;
        }
      }
      `}</style> 
      :
      <style jsx global>{`
    @media (max-width: 1024px) {
        body {
          background: url('/images/mainBackground_v2.jpg') fixed;
          animation: moveBg 300s linear infinite;
        }
      }
      `}</style> 
      }


      <div className='backgr text-sm md:text-base'>
        <AppBarMainMenu />
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <ThirdwebProvider desiredChainId={activeChainId}>
          OS:{os}
          <Component {...pageProps} />
        </ThirdwebProvider >
        <Footer />
      </div>
    </>
  )
}

export default MyApp
