import React from 'react';
import { Navbar } from 'flowbite-react';

function AppBarMainMenu(props) {
    return (
        <Navbar id='AppBarMainMenu' className='bg-transparent' fluid={true} rounded={true}>

            <Navbar.Brand className='md:ml-34 md:p-6' href="#">
                <img
                    src="logo.png"
                    className="mr-3 h-20 sm:h-20 md:h-24"
                    alt="Logo Comics friends"
                />
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse className='md:mr-40 w-64'>
                <Navbar.Link href="/navbars" active={true}>
                    <span id='buttonMenu' className='text-white p-2 px-8 border rounded-full'>About</span>
                </Navbar.Link>

                <Navbar.Link href="/navbars">
                    <span id='buttonMenu' className='text-white p-2 px-8 border rounded-full'>Goals</span>
                </Navbar.Link>

                <Navbar.Link href="/navbars">
                    <span id='buttonMenu' className='text-white p-2 px-8 border rounded-full'>Genesis</span>
                </Navbar.Link>

                <Navbar.Link href="/navbars">
                    <span id='buttonMenu' className='text-white p-2 px-8 border rounded-full'>Team</span>
                </Navbar.Link>

                <Navbar.Link href="/navbars">
                    <span id='buttonMenu' className='text-white p-2 px-8 border rounded-full'>Authenticate</span>
                </Navbar.Link>

            </Navbar.Collapse>

            <div id='sepLine'></div>

        </Navbar>
    );
}

export default AppBarMainMenu;