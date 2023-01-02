import React, { useEffect } from 'react';
import Image from 'next/image';
import image1 from '/public/images/comicsCloud_composed.png';
import AppBarMainMenu from '../AppBar/AppBarMainMenu';

import { gsap } from "gsap";

function AboutComicsFriends(props) {

    useEffect(() => {
        gsap.to("#comicsMove1", {
            duration: 5,
            x: 50,
            // scale: 1.2,
            repeat: -1,
            yoyo: true,
            delay: 1,
        });

        gsap.to("#comicsMove2", {
            duration: 5,
            x: -50,
            // scale: 1.1,
            repeat: -1,
            yoyo: true,
            // delay: 1,
        });

    }, [])

    return (
        <>
            <div className=''>
                <Image
                    src='/l1.png'
                    alt="comicsCloudImg"
                    className='comicsMove absolute w-full scale-110 opacity-50 translate-x-0'
                    id='comicsMove1'
                    width={1440}
                    height={619}
                />
                <Image
                    src='/l2.png'
                    alt="comicsCloudImg"
                    className='comicsMove absolute w-full scale-110 opacity-50 translate-y-96 translate-x-0'
                    id='comicsMove2'
                    width={1440}
                    height={619}
                />
            </div>
            <AppBarMainMenu />

            <div className='paw' style={{ position: 'relative' }}>
                <div className='p-6 flex h-full items-center justify-center lg:py-20 lg:px-64' id='blocAbout'>
                    <div className='aboutComicsFriendsBloc w-full p-2 py-4 text-sm flex flex-wrap justify-center items-center rounded-xl lg:text-base lg:flex-nowrap lg:p-10'>
                        <div className='sm:p-2 w-[30em] sm:w-[40em]'>
                            <Image
                                src={image1}
                                alt="comicsCloudImg"
                                className='w-full'
                            />
                        </div>
                        <div className='p-4 sm:p-16 w-[50em] md:w-[60em] lg:p-2' id='blocAbout_textBloc'>
                            <div>
                                <span className='p-2 text-3xl sm:text-4xl md:text-6xl lg:text-7xl'>About Comics Friends</span>
                                <div className='aboutComicsFriendsBlocText mt-10 flex flex-col gap-4'>
                                    <p>
                                        Welcome to Comics Friends, home to all comic books and artwork lovers and admirers.
                                    </p>
                                    <p>
                                        Comics Friends is a project built on the shared passion for comic books and comic artwork and the idea of bringing this community together using NFTs.
                                    </p>
                                    <p>
                                        To achieve this vision, Comics Friends will create the first-ever virtual comic artist museum. this museum will showcase the work of many renowned comic book artists from around the world.
                                    </p>
                                    <p>
                                        The Comics Friends platform will also grant users access to a forum, unlocking its doors to a community of artists, art collectors, and connoisseurs. Holders will be able to share their vision, thoughts, and critiques about existing and upcoming collections or exhibitions as well as all other Comics Friends related events.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutComicsFriends;