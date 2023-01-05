import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer(props) {
    return (
        <>
            <div className='border-t border-gray-700 text-sm mt-10 p-2 flex flex-wrap justify-between items-center'>
                <div className='flex flex-wrap justify-between items-center sm:gap-8'>
                    <Image alt='logo.png' src='/logo.png' className='m-2' height={500} width={100} />
                    <p>All rights Reserved By <Link href="https://comicsfriends.io">ComicsFriends</Link></p>
                </div>

                <div className='flex flex-wrap justify-between items-center sm:gap-8 sm:m-2'>
                    <Link href='/components/Footer/PrivacyAndPolicy'>Privacy & Policy</Link>
                </div>
            </div>
        </>
    );
}

export default Footer;