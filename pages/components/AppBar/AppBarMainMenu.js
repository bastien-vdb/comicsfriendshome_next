import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const pages = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/components/AboutComicsFriends/AboutComicsFriends' },
        { name: 'Goals', link: '/components/Goals/Goals' },
        { name: 'Genesis', link: '/components/Genesis/Genesis' },
        { name: 'Partnership', link: '#anchor_Partnership' },
        { name: 'Team', link: '#anchor_Team' },
        { name: 'Authenticate', link: '#anchor_Authenticate' }
    ];

    return (
        <nav>
            <div className='deskTopMenu flex justify-between items-center m-2'>
                <Image alt='logo.png' src='/logo.png' className='m-2' height={500} width={200} />
                <ul className='flex gap-4 mr-20'>
                    {pages.map((e, key) => (
                        <DeskTopButton key={key} pages={e} />
                    ))}
                </ul>
            </div>
            <div className='mobileMenu hidden'>
                <div className='flex justify-between'>
                    <Image alt='logo.png' src='/logo.png' className='m-2' height={500} width={100} />
                    <button onClick={() => setMenuOpen(true)} className='m-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                <div style={{ display: menuOpen ? 'block' : 'none' }} className='mobileMenuOpened fixed top-0 left-0 h-screen w-screen text-center text-3xl hidden'>
                    <button onClick={() => setMenuOpen(false)} className='absolute top-0 right-0 m-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
                    <ul className='mt-10 flex flex-col'>
                        {pages.map((e, key) => (
                            <MobileButton key={key} pages={e} setMenuOpen={setMenuOpen} />
                        ))}
                    </ul>
                </div>
            </div>
        </nav >
    );
}

const DeskTopButton = ({ pages }) => {
    return (
        <>
            <li className='desktopButton border-2 rounded-full px-8 py-1'>
                <Link href={pages.link}>{pages.name}</Link>
            </li>
        </>
    )
}

const MobileButton = ({ pages, setMenuOpen }) => {
    return (
        <>
            <li className='h-14 border-b hover:bg-slate-900 flex justify-center items-center'>
                <Link onClick={() => setMenuOpen(false)} href={pages.link}>{pages.name}</Link>
            </li>
        </>
    )
}

export default NavigationBar;
