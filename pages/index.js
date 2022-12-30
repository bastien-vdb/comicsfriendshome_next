import AppBarMainMenu from './components/AppBar/AppBarMainMenu';
import Partnership from './components/Corpus/Partnership';
import Team from './components/Corpus/Team';
import GoConnectWallet from './components/Corpus/GoConnectWallet';
import Footer from './components/Footer/Footer';
import Head from 'next/head';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600&family=Space+Grotesk:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <AppBarMainMenu />
        <Partnership />
        <Team />
        <GoConnectWallet />
        <Footer />
      </main>
    </div>
  )
}
