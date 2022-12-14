import '../styles/globals.css'
import './components/AppBar/AppBarMainMenu.css';
import './components/AboutComicsFriends/AboutComicsFriends.css';
import AppBarMainMenu from './components/AppBar/AppBarMainMenu';

function MyApp({ Component, pageProps }) {
  <AppBarMainMenu/>
  return <Component {...pageProps} />
}

export default MyApp
