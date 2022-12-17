import AppBarMainMenu from './components/AppBar/AppBarMainMenu';
import Partnership from './components/Corpus/Partnership';
import Team from './components/Corpus/Team';
import GoConnectWallet from './components/Corpus/GoConnectWallet';
import Footer from './components/Footer/Footer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {
  return (
    <div>
      <AppBarMainMenu />
      <Partnership />
      <Team />
      <GoConnectWallet />
      <Footer />
    </div>
  )
}
