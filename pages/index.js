import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import AppBarMainMenu from './components/AppBar/AppBarMainMenu';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AboutComicsFriends from './components/AboutComicsFriends/AboutComicsFriends';
import Goals from './components/Goals/Goals';

export default function Home() {
  return (
    <div>
      <AppBarMainMenu/>
      <Goals/>
    </div>
  )
}
