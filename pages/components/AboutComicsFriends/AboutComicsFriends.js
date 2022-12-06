import React from 'react';

function AboutComicsFriends(props) {
    return (
        <div>
            <div className='flex flex-wrap justify-center items-center' id='blocAbout'>
                <div className='p-10 sm:p-2 w-[30em] md:w-[50%]'>
                    <img src='comicsCloud_composed.png' alt='comics cloud' />
                </div>
                <div className='p-4 sm:p-16 md:w-[50%]' id='blocAbout_textBloc'>
                    <div className='bg-[#1B0F2C] p-4 sm:p-10 w-full rounded-2xl'>
                        <span className='p-2 text-3xl sm:text-4xl md:text-6xl'>About Comics Friends</span>
                        <div className='mt-8 p-2 flex flex-col gap-4 text-justify'>
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
    );
}

export default AboutComicsFriends;