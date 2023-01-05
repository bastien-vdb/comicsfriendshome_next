import AppBarMainMenu from './components/AppBar/AppBarMainMenu';
import Partnership from './components/Corpus/Partnership';
import Team from './components/Corpus/Team';
import GoConnectWallet from './components/Corpus/GoConnectWallet';
import AboutComicsFriends from './components/AboutComicsFriends/AboutComicsFriends';
import Footer from './components/Footer/Footer';
import Head from 'next/head';
import Goals from './components/Goals/Goals';
import Genesis from './components/Genesis/Genesis';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600&family=Space+Grotesk:wght@300&display=swap" rel="stylesheet" />
        <title>Comics Friends - NFT Platform for Comics Book Lovers</title>
        <meta name="description" content="Welcome to our NFT community! Join us to buy, sell, and trade unique digital assets. Participate in events and discussions with other NFT enthusiasts. Explore the endless possibilities of the NFT world with us." />

        <meta property="og:title" content="Comics Friends - NFT Platform for Comics Book Lovers" />
        <meta property="og:description" content="Welcome to Comics Friends, home to all comic book and artwork lovers and admirers. Comics Friends is a project built on the shared passion for comic books and comic artwork and the idea of bringing this community together using NFTs. Visit our forum to share your vision, thoughts, and critiques on existing and upcoming collections or exhibitions as well as all other Comics Friends related events." />
        <meta property="og:image" content="/images/comicsStackGenesis1.png" />
        <meta property="og:url" content="https://comicsfriends.art" />
      </Head>
      <AppBarMainMenu />
      <main className='flex flex-col gap-20 sm:gap-40'>
        <AboutComicsFriends />
        <Goals />
        <Genesis />
        <Partnership />
        <Team />
        <GoConnectWallet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
