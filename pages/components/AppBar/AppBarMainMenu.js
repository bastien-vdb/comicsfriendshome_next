import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const pages = [
        { name: 'About', link: '/#anchor_About' },
        { name: 'Goals', link: '/#anchor_Goals' },
        { name: 'Genesis', link: '/#anchor_Partnership' },
        { name: 'Partnership', link: '/#anchor_Partnership' },
        { name: 'Team', link: '/#anchor_Team' },
        { name: 'Authenticate', link: '/#anchor_Authenticate' }
    ];

    return (
        <nav className='fixed z-30 top-0 w-full'>
            <div className='deskTopMenu flex justify-between items-center mb-2 group relative border-b px-8 py-1 shadow-4xl shadow-lg shadow-[#9850b3]'>
                <Image alt='ComicsFriends logo.png' src='/images/logov3.png' className='m-2 z-50' height={500} width={200} />
                <ul className='flex gap-4 mr-20'>
                    {pages.map((e, key) => (
                        <DeskTopButton key={key} pages={e} />
                    ))}
                </ul>
            </div>
            <div className='mobileMenu hidden mb-2 group relative border-b px-8 py-1 shadow-4xl shadow-lg shadow-[#9850b3]'>
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
            <li className='desktopButton group relative border-2 rounded-full px-8 py-1 shadow-4xl shadow-lg shadow-[#9850b3] cursor-pointer'>
                <Link href={pages.link}>{pages.name}
                    <div className="absolute inset-0 w-0 rounded-full opacity-70 bg-[#fafafa] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                </Link>
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
