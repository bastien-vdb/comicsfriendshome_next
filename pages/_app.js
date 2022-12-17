import '../styles/globals.css'
import './components/AppBar/AppBarMainMenu.css';
import './components/AboutComicsFriends/AboutComicsFriends.css';
import AppBarMainMenu from './components/AppBar/AppBarMainMenu';
import Footer from './components/Footer/Footer';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  <>
    <AppBarMainMenu />
    <Footer />
  </>
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider >
  )
}

export default MyApp
