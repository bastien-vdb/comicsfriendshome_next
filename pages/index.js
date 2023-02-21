import Partnership from './components/Corpus/Partnership';
import Team from './components/Corpus/Team';
import GoConnectWallet from './components/Corpus/GoConnectWallet';
import AboutComicsFriends from './components/AboutComicsFriends/AboutComicsFriends';
import Head from 'next/head';
import Goals from './components/Goals/Goals';
import Genesis from './components/Genesis/Genesis';
import { useEffect, useRef } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    const nextElement = videoRef.current.nextElementSibling;
    window.scrollTo({
      top: nextElement.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <title>Comics Friends - NFT Platform for Comics Book Lovers</title>
        <meta name="description" content="Welcome to our NFT community! Join us to buy, sell, and trade unique digital assets. Participate in events and discussions with other NFT enthusiasts. Explore the endless possibilities of the NFT world with us." />

        <meta property="og:title" content="Comics Friends - NFT Platform for Comics Book Lovers" />
        <meta property="og:description" content="Welcome to Comics Friends, home to all comic book and artwork lovers and admirers. Comics Friends is a project built on the shared passion for comic books and comic artwork and the idea of bringing this community together using NFTs. Visit our forum to share your vision, thoughts, and critiques on existing and upcoming collections or exhibitions as well as all other Comics Friends related events." />
        <meta property="og:image" content="https://comicsfriends.io/images/comicsCloud_composed.png" />
        <meta property="og:url" content="https://comicsfriends.io" />
        <meta property="og:type" content="website" />
      </Head>

      <div ref={videoRef} id='comicsmovdiv' data-aos="zoom-out-down" className='comicsmovdiv relative absolute top-0 border-b-2 border-t-2 border-black shadow'>
        <video className='comicsmov' autoPlay muted playsInline onEnded={handleVideoEnded}>
          <source src="/video/comicsmov.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <main className='flex flex-col gap-20 sm:gap-40 pt-20'>

        <div data-aos="fade-up">
          <AboutComicsFriends />
        </div>
        <Goals />
        <Genesis />
        <Partnership />
        <Team />
        <GoConnectWallet />
      </main>
    </>
  )
}
