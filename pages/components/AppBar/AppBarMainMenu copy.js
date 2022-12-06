import React from 'react';

function AppBarMainMenu(props) {
    return (
        <nav id='AppBarMainMenu'>
            <div className='flex justify-between p-6'>
                <div className='hidden lg:block ml-10' id='logo'>
                    <img className='w-32' src='logo.png' alt='logo comicsfriends'/>
                </div>
                <div className='mt-6' id='menu'>
                    <ul className='flex gap-10 mr-64'>
                        <li id='menuButton' className='px-6 p-1 rounded-3xl border'>
                            <a href=''>About</a>
                        </li>
                        <li id='menuButton' className='px-6 p-1 rounded-3xl border'>
                            <a href=''>Goals</a>
                        </li>
                        <li id='menuButton' className='px-6 p-1 rounded-3xl border'>
                            <a href=''>Genesis</a>
                        </li>
                        <li id='menuButton' className='px-6 p-1 rounded-3xl border'>
                            <a href=''>Partnership</a>
                        </li>
                        <li id='menuButton' className='px-6 p-1 rounded-3xl border'>
                            <a href=''>Team</a>
                        </li>
                        <li id='menuButton' className='px-6 p-1 rounded-3xl border'>
                            <a href=''>Authenticate</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='hidden'>
                SOUS MENU
            </div>
            <div id='sepLine'></div>
        </nav>
    );
}

export default AppBarMainMenu;